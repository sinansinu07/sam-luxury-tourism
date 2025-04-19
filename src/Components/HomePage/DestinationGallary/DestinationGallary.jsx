import image1 from "../../../Assets/Outbound/azerbaijan-1.webp"
import image2 from "../../../Assets/Outbound/georgia-1.webp"
import image3 from "../../../Assets/Outbound/turkey-1.webp"
import image4 from "../../../Assets/Outbound/malaysia-3.webp"
import image5 from "../../../Assets/Outbound/maldives-1.webp"

import "./DestinationGallary.scss"
import { outboundDestinations } from "../../../DataSets/outboundDestinations"

export default function DestinationGallary() {
    return (
        <section>
            <div className="destination-gallery container">
                <div className="commonHeading">
                    <h1 className="title">Destination List</h1>
                    <h2 className="subtitle">Most popular Countries to Visit</h2>
                </div>
                <div className="gallery-grid">
                        {outboundDestinations.slice(0,5).map((ele)=> {
                            return (
                                <div key={ele.id} className="gallery-item">
                                    <div className="img-div">
                                        <div className="overlay"></div>
                                        <a href="/destination-outbound"><p className="destination-button">View More</p></a>
                                        <img src={ele.image} alt={ele.name} />
                                        <h1 className="destination-name">{ele.name}</h1>
                                        {ele.label && <p className="destination-label">{ele.label}</p>}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
            </div>
        </section>
    )
}