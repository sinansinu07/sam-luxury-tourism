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
                        <p>SAM Luxury Tourism is a prestigious Dubai-based luxury travel and tourism company dedicated to curating extraordinary travel experiences for discerning clients.
                        With an unwavering commitment to excellence, personalized service, and an extensive network of partnerships, we strive to provide unparalleled luxury journeys that cater to the unique preferences and desires of our esteemed clientele.</p>
                    </div>
                    <div className="mission-vission">
                        <div className="mission">
                            <h3><HiBadgeCheck/>Our Mission</h3>
                            <p>At SAM Luxury Tourism, our mission is to deliver exceptional and immersive travel experiences that surpass the expectations of our clients. </p>
                        </div>
                        <div className="vission">
                            <h3><HiBadgeCheck/>Our Vission</h3>
                            <p>Our vision at SAM Luxury Tourism is to offer extraordinary and memorable travel experiences that combine luxury, culture, and excellence.</p>
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