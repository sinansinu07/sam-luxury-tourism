import "./WhoAreWe.scss"

import picnic from "../../../Assets/Tour/Dubai/DubaiActivities/view-at-pal-jumeirah.webp"
import rafting from "../../../Assets/Tour/Dubai/DubaiActivities/ski-dubai.avif"
import dive from "../../../Assets/Tour/Dubai/DubaiActivities/dessert-safari-dune.jpg"

import { GiKevlarVest, GiReceiveMoney } from "react-icons/gi"
import { PiAirplaneTakeoffFill } from "react-icons/pi"
import { HiBadgeCheck } from "react-icons/hi"

export default function WhoAreWe() {
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

    return (
        <section>
            <div className="who-are-we container">
                <div className="left">
                    <div className="top">
                        <div className="img-div">
                            <img src={rafting} alt="" />
                        </div>
                        <div className="img-div">
                            <img src={dive} alt="" />
                        </div>
                    </div>
                    <div className="bottom">
                        <img src={picnic} alt="" />
                    </div>
                </div>
                <div className="right">
                    <div className="title">
                        <h3>Who Are We</h3>
                    </div>
                    <div className="banner-caption">
                        <h1>Great Opportunity For Adventure & Travels</h1>
                    </div>
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
                    {/* <div className="details">
                        <ul>
                            <li>
                                <HiBadgeCheck className="check-mark"/>
                                <div className="svg-div">
                                    <GiKevlarVest className="svg"/>
                                </div>
                                <div className="details-div">
                                    <h4>Safety First Always</h4>
                                    <p>Dedicated to ensuring the highest level of protection, precaution, and care in all our actions and services.</p>
                                </div>
                            </li>
                            <li>
                                <HiBadgeCheck className="check-mark"/>
                                <div className="svg-div">
                                    <GiReceiveMoney className="svg"/>
                                </div>
                                <div className="details-div">
                                    <h4>Low Price & Friendly</h4>
                                    <p>Offering competitively low prices while maintaining a warm, customer-first approach for a satisfying experience.</p>
                                </div>
                            </li>
                            <li>
                                <HiBadgeCheck className="check-mark"/>
                                <div className="svg-div">
                                    <PiAirplaneTakeoffFill className="svg"/>
                                </div>
                                <div className="details-div">
                                    <h4>Trusted Travel Guide</h4>
                                    <p>Providing dependable advice and expert insights to ensure every aspect of your travel is smooth and seamless.</p>
                                </div>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </section>
    )
}