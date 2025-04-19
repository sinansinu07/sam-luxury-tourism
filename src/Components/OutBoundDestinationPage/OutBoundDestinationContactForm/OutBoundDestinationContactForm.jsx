import { useState } from "react";
import "./OutBoundDestinationContactForm.scss"

import { FaCalendarAlt, FaPaperPlane, FaPhoneAlt, FaUser } from "react-icons/fa";
import { IoIosArrowDown, IoMdArrowDropdown, IoMdMail } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { outboundDestinations } from "../../../DataSets/outboundDestinations";
import { MdDateRange } from "react-icons/md";

import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_OUTBOUND_DESTINATION_FORM_TEMPLATE_ID;

export default function OutBoundDestinationContactForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        passportNo: "",
        issueDate: "",
        expiryDate: "",
        nationality: "",
        DOB: "",
        phoneNo: "",
        email: "",
        address: "",
        destination: "",
        journeyDate: "",
        returnDate: "",
        tourPurpose: "",
        visaType: "",
        visaNo: "",
        travelInsurance: "",
        emergencyContactName: "",
        emergencyContactRelation: "",
        emergencyContactNumber: "",
        emergencyContactEmail: "",
        remarks: "",
    });

    const [ formErrors, setFormErrors ] = useState({});

    const errors = {}

    const validateErrors = () => {
        if (!formData?.fullName || formData.fullName.trim().length === 0) {
            errors.fullName = "Please enter Full Name";
        }
        if (!formData?.email || formData.email.trim().length === 0) {
            errors.email = "Please enter email";
        }
        if (!formData?.phoneNo || formData.phoneNo.trim().length === 0) {
            errors.phoneNo = "Please enter phone number";
        }
        if (!formData?.nationality || formData.nationality.trim().length === 0) {
            errors.nationality = "Please enter nationality";
        }
        if (!formData?.DOB || formData.DOB.trim().length === 0) {
            errors.DOB = "Please enter Date of Birth";
        }
        if (!formData?.address || formData.address.trim().length === 0) {
            errors.address = "Please enter address";
        }
        if (!formData.passportNo || formData.passportNo.trim().length === 0) {
            errors.passportNo = "Please enter passport number";
        }
        if (!formData.issueDate || formData.issueDate.trim().length === 0) {
            errors.issueDate = "Please enter issue date";
        }
        if (!formData.expiryDate || formData.expiryDate.trim().length === 0) {
            errors.expiryDate = "Please enter expiry date";
        }
        if (!formData?.destination || formData.destination.trim().length === 0) {
            errors.destination = "Please select destination";
        }
        if (!formData?.journeyDate || formData.journeyDate.trim().length === 0) {
            errors.journeyDate = "Please select journey date";
        }
        if (!formData?.returnDate || formData.returnDate.trim().length === 0) {
            errors.returnDate = "Please select return date";
        }
        if (!formData?.visaType || formData.visaType.trim().length === 0) {
            errors.visaType = "Please select visa type";
        }
        // if (!formData?.visaNo || formData.visaNo.trim().length === 0) {
        //     errors.visaNo = "Please enter visa number";
        // }
        if (!formData?.emergencyContactName || formData.emergencyContactName.trim().length === 0) {
            errors.emergencyContactName = "Please enter emergency contact name";
        }
        if (!formData?.emergencyContactRelation || formData.emergencyContactRelation.trim().length === 0) {
            errors.emergencyContactRelation = "Please enter the relation of emergency contact";
        }
        if (!formData?.emergencyContactNumber || formData.emergencyContactNumber.trim().length === 0) {
            errors.emergencyContactNumber = "Please enter emergency contact number";
        }
        if (!formData?.emergencyContactEmail || formData.emergencyContactEmail.trim().length === 0) {
            errors.emergencyContactEmail = "Please enter emergency contact email";
        }
    }
    validateErrors()
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendContactFormEmail = async (formData) => {
        // Check for empty or undefined fields and provide default values where necessary
        const templateParams = {
            email: "booking@samluxurytours.com",
            customerName: formData.fullName || "No Name Provided",
            customerPhoneNo: formData.phoneNo || "No Phone Provided",
            customerEmail: formData.email || "No Email Provided",
            DOB: formData.DOB || "No Date of Birth Provided",
            address: formData.address || "No Address Provided",
            destination: formData.destination || "No Destination Provided",
            passportNo: formData.passportNo || "No Passport Number Provided",
            issueDate: formData.issueDate || "No Issue Date Provided",
            expiryDate: formData.expiryDate || "No Expiry Date Provided",
            nationality: formData.nationality || "No Nationality Provided",
            visaType: formData.visaType || "Nill",
            visaNo: formData.visaNo || "Nill",
            travelInsurance: formData.travelInsurance || "Nill",
            journeyDate: formData.journeyDate || "No Date Provided",
            returnDate: formData.returnDate || "No Date Provided",
            emergencyContactName: formData.emergencyContactName || "No Name Provided",
            emergencyContactRelation: formData.emergencyContactRelation || "No Relation Provided",
            emergencyContactNumber: formData.emergencyContactNumber || "No Number Provided",
            emergencyContactEmail: formData.emergencyContactEmail || "No Email Provided",
            remarks: formData.remarks || "Nill"
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

    // OutBound Destination Form Template Design

    // A new OutBound Destination Inquiry from {{customerName}} has been received. Kindly respond at your earliest convenience.

    // OUTBOUND DESTINATION FORM INQUIRY

    // Personal Information:

    // Name: {{customerName}}
    // Email: {{customerEmail}}
    // Phone No: {{customerPhoneNo}}
    // Natoinality: {{nationality}}
    // DOB: {{DOB}}
    // Address: {{address}}

    // Travel Information:

    // Passport No: {{passportNo}}
    // Issue Date: {{issueDate}}
    // Expery Date: {{expiryDate}}
    // Visa Type: {{visaType}}
    // Visa No: {{visaNo}}
    // Travel Insurance: {{travelInsurance}}
    // Tour Purpose: {{tourPurpose}}

    // Destination: {{destinationt}}
    // Journey Date: {{journeyDate}}
    // Return Date: {{returnDate}}

    // Emergency Contact Information

    // Name: {{emergencyContactName}}
    // Relation: {{emergencyContactRelation}}
    // Phone No: {{emergencyContactNumber}}
    // Email: {{emergencyContactEmail}}

    // Remarks:

    // {{remarks}}

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        if(Object.keys(errors).length === 0) {
            // console.log(formData);
            sendContactFormEmail(formData)
            alert("Form Submitted Successfully!")
            setFormData({
                fullName: "",
                passportNo: "",
                issueDate: "",
                expiryDate: "",
                nationality: "",
                DOB: "",
                phoneNo: "",
                email: "",
                address: "",
                destination: "",
                journeyDate: "",
                returnDate: "",
                tourPurpose: "",
                visaType: "",
                visaNo: "",
                travelInsurance: "",
                emergencyContactName: "",
                emergencyContactRelation: "",
                emergencyContactNumber: "",
                emergencyContactEmail: "",
                remarks: "",
            })
        } else {
            alert("Please fill in all the required fields.");
            setFormErrors(errors)
            console.log(formErrors)
        }
    }

    return (
        <section id="contact-form">
            <div className="outbound-contact-form container">
                <div className="heading-section">
                    <div className="title">
                        <h3>Get In Touch</h3>
                    </div>
                    <div className="sub-title">
                        <h1>Send Us Message</h1>
                        {/* <p>Have questions or need assistance? Reach out to us for seamless travel planning and unforgettable experiences!</p> */}
                    </div>
                </div>
                <form className="form-container" onSubmit={handleFormSubmit}>
                    <label htmlFor="">Personal Information</label>
                    <div className="sameline">
                        <div className="form-group">
                            <input type="text" name="fullName" id="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
                            <FaUser className="icon" />
                        </div>
                        <div className="form-group">
                            <input type="number" name="passportNo" id="passportNo" placeholder="Passport No" value={formData.passportNo} onChange={handleChange} />
                            <FaUser className="icon" />
                        </div>
                    </div>
                    {(formErrors.fullName || formErrors.passportNo) && (
                        <div className="sameline">
                            {formErrors.fullName && <div className="error">{formErrors.fullName}</div>}
                            {formErrors.passportNo && <div className="error">{formErrors.passportNo}</div>}
                        </div>
                    )}
                    <div className="sameline">
                        <div className="sameline">
                            <label htmlFor="">Issue Date</label>
                            <div className="form-group">
                                <input type="date" name="issueDate" id="issueDate" placeholder="Issue Date" value={formData.issueDate} onChange={handleChange} />
                                {/* <MdDateRange className="icon" /> */}
                            </div>
                        </div>
                        <div className="sameline">
                            <label htmlFor="">Expiry Date</label>
                            <div className="form-group">
                                <input type="date" name="expiryDate" id="expiryDate" placeholder="Expiry Date" value={formData.expiryDate} onChange={handleChange} />
                                {/* <MdDateRange className="icon" /> */}
                            </div>
                        </div>
                    </div>
                    {(formErrors.issueDate || formErrors.expiryDate) && (
                        <div className="sameline">
                            {formErrors.issueDate && <div className="error">{formErrors.issueDate}</div>}
                            {formErrors.expiryDate && <div className="error">{formErrors.expiryDate}</div>}
                        </div>
                    )}
                    <div className="sameline">
                        <div className="form-group">
                            <input type="text" name="nationality" id="nationality" placeholder="Nationality" value={formData.nationality} onChange={handleChange} />
                        </div>
                        <div className="sameline mobile">
                            <label htmlFor="">DOB</label>
                            <div className="form-group">
                                <input type="date" name="DOB" placeholder="DOB" value={formData.DOB} onChange={handleChange} />
                                {/* <MdDateRange className="icon" /> */}
                            </div>
                        </div>
                    </div>
                    {(formErrors.nationality || formErrors.DOB) && (
                        <div className="sameline">
                            {formErrors.nationality && <div className="error">{formErrors.nationality}</div>}
                            {formErrors.DOB && <div className="error">{formErrors.DOB}</div>}
                        </div>
                    )}
                    <div className="sameline">
                        <div className="form-group">
                            <input type="text" name="phoneNo" id="phoneNo" placeholder="Phone Number" value={formData.phoneNo} onChange={handleChange} />
                            <FaPhoneAlt className="icon" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="email" id="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                            <IoMdMail className="icon" />
                        </div>
                    </div>
                    {(formErrors.phoneNo || formErrors.email) && (
                        <div className="sameline">
                            {formErrors.phoneNo && <div className="error">{formErrors.phoneNo}</div>}
                            {formErrors.email && <div className="error">{formErrors.email}</div>}
                        </div>
                    )}
                    <div className="form-group">
                            <textarea type="text" name="address" id="address" placeholder="Address" value={formData.address} onChange={handleChange} />
                            {/* <IoMdMail className="icon" /> */}
                        </div>
                    <label htmlFor="">Travel Details</label>
                    <div className="form-group">
                        <select type="text" name="destination" id="destination" placeholder="Destination" value={formData.destination} onChange={handleChange} >
                            <option value="">Select Destination</option>
                            {outboundDestinations.map((ele) => {
                                return (
                                    <option key={ele.id} value={ele.name}>{ele.name}</option>
                                )
                            })}
                        </select>
                        {/* <IoIosArrowDown className="icon" /> */}
                    </div>
                    {(formErrors.destination) && (
                        <div className="sameline">
                            {formErrors.destination && <div className="error">{formErrors.destination}</div>}
                        </div>
                    )}
                    <div className="sameline">
                        <div className="sameline">
                            <label htmlFor="">Departure Date</label>
                            <div className="form-group">
                                <input type="date" name="journeyDate" id="journeyDate" placeholder="Departure Date" value={formData.journeyDate} onChange={handleChange} />
                                {/* <MdDateRange className="icon" /> */}
                            </div>
                        </div>
                        <div className="sameline">
                            <label htmlFor="">Return Date</label>
                            <div className="form-group">
                                <input type="date" name="returnDate" id="returnDate" placeholder="Return Date" value={formData.returnDate} onChange={handleChange} />
                                {/* <MdDateRange className="icon" /> */}
                            </div>
                        </div>
                    </div>
                    {(formErrors.journeyDate || formErrors.returnDate) && (
                        <div className="sameline">
                            {formErrors.journeyDate && <div className="error">{formErrors.journeyDate}</div>}
                            {formErrors.returnDate && <div className="error">{formErrors.returnDate}</div>}
                        </div>
                    )}
                    <div className="form-group">
                        <select type="text" name="tourPurpose" id="tourPurpose" placeholder="Purpose of Travel" value={formData.tourPurpose} onChange={handleChange} >
                            <option value="">Select Travel Purpose</option>
                                <option value="Leisure">Leisure</option>
                                <option value="Business">Business</option>
                                <option value="Other">Other</option>
                        </select>
                        {/* <IoIosArrowDown className="icon" /> */}
                    </div>
                    <label htmlFor="">Visa and Insurance Details</label>
                    <div className="sameline">
                        <div className="form-group">
                            <select type="text" name="visaType" id="visaType" placeholder="Visa Type" value={formData.visaType} onChange={handleChange} >
                                <option value="">Visa Type</option>
                                    <option value="Leisure">Business</option>
                                    <option value="Business">Tourist</option>
                                    <option value="Other">Other</option>/
                            </select>
                            {/* <IoIosArrowDown className="icon" /> */}
                        </div>
                        <div className="form-group">
                            <input type="number" name="visaNo" id="visaNo" placeholder="Visa No" value={formData.visaNo} onChange={handleChange} />
                            {/* <FaUser className="icon" /> */}
                        </div>
                    </div>
                    {(formErrors.visaType) && (
                        <div className="sameline">
                            {formErrors.visaType && <div className="error">{formErrors.visaType}</div>}
                            {/* {formErrors.visaNo && <div className="error">{formErrors.visaNo}</div>} */}
                        </div>
                    )}
                    <div className="form-group">
                        <input type="number" name="travelInsurance" id="travelInsurance" placeholder="Travel Insurance Details(If Required)" value={formData.travelInsurance} onChange={handleChange} />
                        {/* <FaUser className="icon" /> */}
                    </div>
                    <label htmlFor="">Emergency Contact Details</label>
                    <div className="sameline">
                        <div className="form-group">
                            <input type="text" name="emergencyContactName" id="emergencyContactName" placeholder="Name" value={formData.emergencyContactName} onChange={handleChange} />
                            {/* <FaPhoneAlt className="icon" /> */}
                        </div>
                        <div className="form-group">
                            <input type="text" name="emergencyContactRelation" id="emergencyContactRelation" placeholder="Relation" value={formData.emergencyContactRelation} onChange={handleChange} />
                            {/* <IoMdMail className="icon" /> */}
                        </div>
                    </div>
                    {(formErrors.emergencyContactName || formErrors.emergencyContactRelation) && (
                        <div className="sameline">
                            {formErrors.emergencyContactName && <div className="error">{formErrors.emergencyContactName}</div>}
                            {formErrors.emergencyContactRelation && <div className="error">{formErrors.emergencyContactRelation}</div>}
                        </div>
                    )}
                    <div className="sameline">
                        <div className="form-group">
                            <input type="text" name="emergencyContactNumber" id="emergencyContactNumber" placeholder="Phone Number" value={formData.emergencyContactNumber} onChange={handleChange} />
                            <FaPhoneAlt className="icon" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="emergencyContactEmail" id="emergencyContactEmail" placeholder="Email" value={formData.emergencyContactEmail} onChange={handleChange} />
                            <IoMdMail className="icon" />
                        </div>
                    </div>
                    {(formErrors.emergencyContactNumber || formErrors.emergencyContactEmail) && (
                        <div className="sameline">
                            {formErrors.emergencyContactNumber && <div className="error">{formErrors.emergencyContactNumber}</div>}
                            {formErrors.emergencyContactEmail && <div className="error">{formErrors.emergencyContactEmail}</div>}
                        </div>
                    )}
                    <div className="form-group">
                        <textarea name="remarks" id="remarks" placeholder="Question" value={formData.remarks} onChange={handleChange}></textarea>
                    </div>
                    <div className="button-div">
                        <button className="btn" type="submit">
                            <div className="icon-div">
                                <FaPaperPlane />
                            </div>
                            <span className="text">
                                Send Inquiry
                            </span>
                            <span className="loading-animate"></span>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}