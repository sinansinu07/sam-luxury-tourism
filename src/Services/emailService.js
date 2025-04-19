import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_ORDER_DETAILS_TEMPLATE_ID;

export const sendOrderEmail = async (customerDetails, cart, totalAmount, orderId) => {
  const templateParams = {
    email: customerDetails.email, // ✅ Ensure this is set
    order_id: orderId,
    customerName: customerDetails.firstName + " " + customerDetails.lastName,
    totalAmount: totalAmount,
    orders: cart.lineItems.map(item => ({
      name: item.name,
      tourOption: item.tourOption,
      transferOption: item.transferOption.name,
      date: item.date,
      adult: item.adult,
      child: item.child,
      hour: item.hour ? item.hour : "Not Applicable",
      amount: item.amount,
    })),
  };

  try {
    const response = await emailjs.send(
      SERVICE_ID, // Replace with your EmailJS Service ID
      TEMPLATE_ID, // Replace with your EmailJS Template ID
      templateParams,
      PUBLIC_KEY // Replace with your EmailJS Public Key
    );

    console.log("Email sent successfully!", response);
  } catch (error) {
    console.error("Email sending error:", error);
  }
};