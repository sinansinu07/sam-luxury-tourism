import "./AboutCompany.scss"

import { HiBadgeCheck } from "react-icons/hi"

import image from "../../../Assets/Tour/Dubai/DubaiTourCategory/city-tour.webp"

const services = [
    "Tailored Luxury Travel",
    "Adventure Activities",
    "Chauffer Services",
    "Visa Services",
    "Corporate and VIP Travel",
    "Mice / Events",
    "Attractions Tickets",
    "Accommodations"
]

export default function AboutCompany() {
    return (
        <section>
            <div className="about-company container">
                <div className="left">
                    <div className="heading-section">
                        <div className="title">
                            <h3>About Company</h3>
                        </div>
                        <div className="sub-title">
                            <h1>Experience Luxury, Explore the World with SAM</h1>
                        </div>
                        <p>Experience Luxury Travel and Explore the World with SAM Luxury Tourism.
                        SAM Luxury Tourism is a premier Dubai-based luxury travel company specializing in curating exceptional luxury travel experiences for discerning clients. Our dedicated team offers personalized luxury tourism services tailored to meet the unique preferences and desires of our clientele. With an unwavering commitment to excellence, attention to detail, and an extensive network of global partnerships, we strive to deliver unparalleled luxury journeys that create unforgettable memories.
                        </p>
                    </div>
                    <div className="mission-vission">
                        <div className="mission">
                            <h3><HiBadgeCheck/>Our Mission:</h3>
                            <p><strong>Luxury Travel Experiences Beyond Expectations</strong></p>
                            <p>At SAM Luxury Tourism, our mission is to provide extraordinary travel experiences that exceed the expectations of our clients. From private city tours to desert safaris, we ensure each journey is immersive and tailored to offer the highest levels of luxury and comfort. </p>
                        </div>
                        <div className="vission">
                            <h3><HiBadgeCheck/>Our Vision:</h3>
                            <p><strong>Combining Culture, Excellence, and Luxury</strong></p>
                            <p>Our vision is to offer memorable travel experiences that seamlessly combine luxury, culture, and excellence. Whether you are seeking a luxury getaway or an adventure trip, SAM Luxury Tourism promises an exceptional and customized travel experience that leaves a lasting impression.
                        </p>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="title">
                        <h3>Our Services</h3>
                    </div>
                    {/* <div className="banner-caption">
                        <h1>Our Services</h1>
                    </div> */}
                    <div className="activites-grid">
                        {services.map((ele, index) => {
                            return (
                                <div key={index} className={`activites-card ${index % 2 === 0 ? "rotate-left" : "rotate-right"}`}>
                                    <HiBadgeCheck/>
                                    <span className="text">{ele}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}