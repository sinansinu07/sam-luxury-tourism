import "./ContactUsHero.scss"

import banner from "../../../Assets/Tour/Dubai/DubaiActivities/fountain-show-like-ride.webp"
import { FaAngleRight } from "react-icons/fa"
import { FaAnglesRight } from "react-icons/fa6"

export default function ContactUsHero() {
    return (
        <section>
            <div className="contact-hero">
                <img src={banner} alt=""/>
                <div className="overlay"></div>
                <div className="contact-hero-section">
                    {/* <h1>Contact Us</h1> */}
                    {/* <h3>Home <FaAnglesRight /> Contact Us</h3> */}
                    <h2>Experience Luxury,<br/> Explore the World With SAM</h2>
                </div>
            </div>
        </section>
    )
}