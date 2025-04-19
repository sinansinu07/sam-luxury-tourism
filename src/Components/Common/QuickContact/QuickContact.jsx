import "./QuickContact.scss"

import banner from "../../../Assets/Tour/Dubai/DubaiActivities/globan-village.webp"
import { FaPaperPlane } from "react-icons/fa"

export default function QuickContact() {
    return (
        <section>
            <div className="quick-contact">
                <img src={banner} alt="" />
                <div className="overlay"></div>
                <div className="quick-contact-content">
                    <h1>Experience Luxury,<br/> Explore the World with SAM</h1>
                    <div className="button-div">
                        <a href="/contact-us"><button className="btn">
                            <div className="icon-div">
                                <FaPaperPlane />
                            </div>
                            <span className="text">
                                Book Now
                            </span>
                            <span className="loading-animate"></span>
                        </button></a>
                    </div>
                </div>
            </div>
        </section>
    )
}