import { useState } from "react";
import "./ContactForm.scss"

import image from "../../../Assets/Banners/contact-us.jpg"
import { FaCalendarAlt, FaPaperPlane, FaPhoneAlt, FaUser } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdMail } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";

import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_CONTACT_FORM_TEMPLATE_ID;

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNo: "",
        email: "",
        question: "",
    });

    const [ formErrors, setFormErrors ] = useState({});

    const errors = {}

    const validateErrors = () => {
        if(formData?.firstName?.trim()?.length === 0){
            errors.firstName = "First Name is Required"
        }
        if(formData?.lastName?.trim()?.length === 0){
            errors.lastName = "Last Name is Required"
        }
        if(formData?.phoneNo?.trim()?.length === 0){
            errors.phoneNo = "Phone No is Required"
        }
        if(formData?.email?.trim()?.length === 0){
            errors.email = "Email is Required"
        }
    }
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Template Design

    // A new from submission from {{customerName}} has been received. Kindly respond at your earliest convenience.
 
 
    // Name: {{customerName}}
    // email:{{customerEmail}}
    // Phone No: {{customerPhoneNo}}
    // Question: {{question}}

    const sendContactFormEmail = async (formData) => {
        const templateParams = {
            email: "booking@samluxurytours.com", // ✅ Ensure this is set
            customerName: formData.firstName + " " + formData.lastName,
            customerPhoneNo: formData.phoneNo,
            customerEmail: formData.email,
            question: formData.question,
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

    const handleFormSubmit = (e) => {
        e.preventDefault()
        validateErrors()
        console.log(formData)
        if(Object.keys(errors).length === 0) {
            sendContactFormEmail(formData)
            console.log("message sent")
            alert("Message sent successfully")
            setFormData({
                firstName: "",
                lastName: "",
                phoneNo: "",
                email: "",
                question: "",
            });
            setFormErrors({})
        } else {
            console.log(errors)
            setFormErrors(errors)
        } 
    }

    return (
        <section>
            <div className="contact-form container">
                <div className="left">
                    <div className="heading-section">
                        <div className="title">
                            <h3>Get In Touch</h3>
                        </div>
                        <div className="sub-title">
                            <h1>Send Us Message</h1>
                            <p>Have questions or need assistance? Reach out to us for seamless travel planning and unforgettable experiences!</p>
                        </div>
                    </div>
                    <form className="form-container" onSubmit={handleFormSubmit}>
                        <div className="sameline">
                            <div className="form-group">
                                <input type="text" name="firstName" id="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
                                <FaUser className="icon" />
                            </div>

                            <div className="form-group">
                                <input type="text" name="lastName" id="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
                                <FaUser className="icon" />
                            </div>
                        </div>
                        {(formErrors.firstName || formErrors.lastName) &&
                            <div className="sameline">
                                {formErrors.firstName && <div className="error-message">{formErrors.firstName}</div>}
                                {formErrors.lastName && <div className="error-message">{formErrors.lastName}</div>}
                            </div>
                        }
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
                        {(formErrors.phoneNo || formErrors.email) &&
                            <div className="sameline">
                                {formErrors.phoneNo && <div className="error-message">{formErrors.phoneNo}</div>}
                                {formErrors.email && <div className="error-message">{formErrors.email}</div>}
                            </div>
                        }
                        <div className="form-group">
                            <textarea name="question" id="question" placeholder="Question" value={formData.question} onChange={handleChange}></textarea>
                        </div>
                        <div className="button-div">
                        <button className="btn" type="submit">
                            <div className="icon-div">
                                <FaPaperPlane />
                            </div>
                            <span className="text">
                                Inquire Now
                            </span>
                            <span className="loading-animate"></span>
                        </button>
                    </div>
                    </form>
                </div>
                <div className="right">
                    <img src={image} alt="" />
                </div>
            </div>
        </section>
    )
}