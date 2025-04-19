import "./AboutHero.scss"

import banner from "../../../Assets/Tour/Dubai/DubaiActivities/CULTURE-HERITAGE.webp"
import { FaAngleRight } from "react-icons/fa"
import { FaAnglesRight } from "react-icons/fa6"

export default function AboutHero() {
    return (
        <section>
            <div className="about-hero">
                <img src={banner} alt=""/>
                <div className="overlay"></div>
                <div className="about-hero-section">
                    {/* <h1>About Us</h1> */}
                    {/* <h3>Home <FaAnglesRight /> About Us</h3> */}
                </div>
            </div>
        </section>
    )
}