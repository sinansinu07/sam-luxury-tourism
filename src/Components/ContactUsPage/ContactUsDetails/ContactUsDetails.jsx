import React from "react";
import "./ContactUsDetails.scss";
// import { FaPhoneVolume } from "react-icons/fa";
// import { IoIosMail } from "react-icons/io";
// import { FaMapLocationDot } from "react-icons/fa6";

export default function ContactUsDetails() {
    return (
        <section> 
            <div className="contact-us container">
                <h1>Our Office</h1>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.6828025148!2d54.89783765079398!3d25.07628045303443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5daa1005431b%3A0x1a012130c30d4ff1!2sSam%20Luxury%20Tourism%20LLC!5e0!3m2!1sen!2sae!4v1740860261545!5m2!1sen!2sae"
                    // width="100%"
                    // height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                ></iframe>
                {/* <div className="heading-section">
                    <div className="title">
                        <h3>Contact Us</h3>
                    </div>
                    <div className="sub-title">
                        <h1>Ready to Get Our Best Services!<br/> Feel Free to Contact With Us</h1>
                    </div>
                </div>
                <div className="contact-grid">
                    <div className="contact-card">
                        <FaMapLocationDot />
                        <h3>Office Location</h3>
                        <p>55 Main Street, 2nd Floor <br /> New York City</p>
                    </div>
                    <div className="contact-card">
                        <IoIosMail />
                        <h3>Email Address</h3>
                        <p>samtourandtravelsinfo@gmail.com <br /> samtourandtravels.net</p>
                    </div>
                    <div className="contact-card">
                        <FaPhoneVolume />
                        <h3>Hotline</h3>
                        <p>+000 (123) 456 88 <br /> +859 63 20</p>
                    </div>
                </div> */}
            </div>
        </section>
    );
};
