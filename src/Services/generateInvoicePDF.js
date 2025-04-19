import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import logo from "../Assets/Logo/Sam Logo 250X100.png"

export const generateInvoicePDF = (customerDetails, cartData) => {
    const doc = new jsPDF();
    const themeColor = [198, 161, 66];
    const black = [0, 0, 0];

    const margin = 14;
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const contentWidth = pageWidth - margin * 2;

    const invoiceNo = `order-${Date.now()}`;
    const invoiceDate = new Date().toLocaleDateString();

    if (logo) {
        doc.addImage(logo, "PNG", pageWidth - margin - 45, 20, 45, 20);
    }

    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...black);
    doc.text("SAM Luxury Tourism", margin, 20);

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...black);
    const addressLines = [
        "506-29, SAM Office,",
        "ACICO Business Park,",
        "Port Saeed, Dubai",
        "Email: info@samluxurytours.com",
        "Phone: +971 43412570",
    ];
    addressLines.forEach((line, i) => {
        doc.text(line, margin, 26 + i * 5);
    });

    doc.setDrawColor(...themeColor);
    doc.line(margin, 56, pageWidth - margin, 56);

    let y = 70;
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("Bill To:", margin, y);

    doc.setFont("helvetica", "normal");
    y += 6;
    doc.text(`Name: ${customerDetails.firstName} ${customerDetails.lastName}`, margin, y);
    y += 6;
    doc.text(`Email: ${customerDetails.email}`, margin, y);
    y += 6;
    doc.text(`Phone: ${customerDetails.phone}`, margin, y);
    y += 6;
    doc.text(`Nationality: ${customerDetails.nationality}`, margin, y);

    if (customerDetails.specialRequest) {
        y += 6;
        const special = doc.splitTextToSize(`Special Request: ${customerDetails.specialRequest}`, contentWidth);
        doc.text(special, margin, y);
        y += special.length * 5;
    }

    if (customerDetails.remarks) {
        const remarks = doc.splitTextToSize(`Remarks: ${customerDetails.remarks}`, contentWidth);
        doc.text(remarks, margin, y);
        y += remarks.length * 5;
    }

    const invoiceX = pageWidth - margin - 60;
    let infoY = 70;
    doc.setFont("helvetica", "bold");
    doc.text("Invoice:", invoiceX, infoY);

    doc.setFont("helvetica", "normal");
    infoY += 6;
    const invoiceLines = doc.splitTextToSize(`Invoice No: ${invoiceNo}`, 60);
    doc.text(invoiceLines, invoiceX, infoY);
    infoY += invoiceLines.length * 5;

    doc.text(`Date: ${invoiceDate}`, invoiceX, infoY);
    infoY += 6;

    const trnText = doc.splitTextToSize("TRN (Tax Registration Number): 104076942200003", 60);
    doc.text(trnText, invoiceX, infoY);

    // Table
    const headers = [["Tour", "Option", "Date", "Adults", "Children", "Transfer", "Amount (AED)"]];
    const body = cartData.lineItems.map((item) => [
        item.name,
        item.tourOption,
        item.date,
        item.adult,
        item.child,
        item.transferOption?.name || "N/A",
        item.amount.toFixed(2),
    ]);

    const totalAmount = cartData.totalAmount || 0;
    const baseAmount = (totalAmount / 1.05).toFixed(2); // Excluding VAT
    const vat = (totalAmount - parseFloat(baseAmount)).toFixed(2);

    body.push([
        { content: "Base Amount (Excl. VAT)", colSpan: 6, styles: { halign: "right", textColor: black } },
        { content: `AED ${baseAmount}`, styles: { textColor: black } },
    ]);
    body.push([
        { content: "VAT (5%)", colSpan: 6, styles: { halign: "right", textColor: black } },
        { content: `AED ${vat}`, styles: { textColor: black } },
    ]);
    body.push([
        { content: "Total Amount (Incl. VAT)", colSpan: 6, styles: { halign: "right", fontStyle: "bold", textColor: themeColor } },
        { content: `AED ${totalAmount.toFixed(2)}`, styles: { fontStyle: "bold", textColor: themeColor } },
    ]);

    autoTable(doc, {
        startY: y + 20,
        margin: { left: margin, right: margin },
        head: headers,
        body: body,
        styles: {
            fontSize: 10,
            halign: "center",
            valign: "middle",
        },
        headStyles: {
            fillColor: themeColor,
            textColor: [255, 255, 255],
            fontStyle: "bold",
        },
        alternateRowStyles: { fillColor: [245, 245, 245] },
        didDrawPage: (data) => {
            if (data.pageNumber > 1) {
                doc.addImage(logo, "PNG", pageWidth - margin - 45, 10, 45, 20);
                doc.setFontSize(18);
                doc.setFont("helvetica", "bold");
                doc.setTextColor(...themeColor);
                doc.text("SAM Luxury Tourism", margin, 20);
            }
        },
    });

    let nextY = doc.lastAutoTable.finalY + 15;

    const termsArray = [
        "1- Trip timings and activities are as planned, but they may change if there’s traffic, bad weather, or technical problems.",
        "2- Seats are given on a sharing basis and based on what’s available when you get on.",
        "3- If SAM Luxury Tourism LLC can’t provide the trip, we will offer a different option or refund minus any charges.",
        "4- No cancellation after booking. Changes only with 48h notice. Late arrivals are treated as cancellations.",
        "5- Guests are responsible for their health fitness to join activities.",
        "6- Some services like Burj Khalifa tickets are non-refundable. Prices can vary with season and availability.",
        "7- SAM Luxury Tourism LLC is not liable for any loss, injury, or damage. Guests must arrange their own insurance.",
        "8- Carry your passport/ID where required (e.g. Hatta, Musandam, etc).",
        "9- No refunds for New Year’s Eve events.",
        "10- All prices include 5% VAT as per UAE law.",
        "",
        "Note:",
        "• All disputes subject to UAE jurisdiction.",
        "• Report any invoice discrepancies to accounts@samluxurytours.com within 3 working days.",
    ];

    // Try wrapping and check fit
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...themeColor);
    doc.text("Terms & Conditions", margin, nextY);
    nextY += 6;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(...black);

    const lines = [];
    termsArray.forEach((point) => {
        const wrapped = doc.splitTextToSize(point, contentWidth);
        lines.push(...wrapped);
    });

    const lineHeight = 4;
    const blockHeight = lines.length * lineHeight;

    if (nextY + blockHeight + 15 > pageHeight - margin) {
        // Not enough space – move some lines to next page
        const linesFit = Math.floor((pageHeight - nextY - 15) / lineHeight);
        const firstPageLines = lines.slice(0, linesFit);
        const nextPageLines = lines.slice(linesFit);

        doc.text(firstPageLines, margin, nextY);

        doc.addPage();
        let secondY = margin + 10;

        doc.setFontSize(12);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(...themeColor);
        doc.text("Terms & Conditions (contd.)", margin, secondY);
        secondY += 6;

        doc.setFontSize(8);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(...black);
        doc.text(nextPageLines, margin, secondY);

        secondY += nextPageLines.length * lineHeight + 10;

        doc.setFontSize(11);
        doc.setFont("helvetica", "italic");
        doc.text(
            `Thank you for choosing SAM Luxury Tourism, ${customerDetails.firstName}!`,
            margin,
            secondY
        );
    } else {
        // Everything fits on current page
        doc.text(lines, margin, nextY);
        nextY += blockHeight + 10;

        doc.setFontSize(11);
        doc.setFont("helvetica", "italic");
        doc.text(
            `Thank you for choosing SAM Luxury Tourism, ${customerDetails.firstName}!`,
            margin,
            nextY
        );
    }

    doc.save("invoice.pdf");
};