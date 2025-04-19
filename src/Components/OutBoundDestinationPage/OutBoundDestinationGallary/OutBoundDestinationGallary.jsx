import "./OutBoundDestinationGallary.scss"
import { outboundDestinations } from "../../../DataSets/outboundDestinations"

export default function OutBoundDestinationGallary() {
    return (
        <section>
            <div className="outbound-destination-gallery container">
                <div className="commonHeading">
                    <h1 className="title">OutBound Destinations</h1>
                    <h2 className="subtitle">Most popular Countries to Visit</h2>
                </div>
                <div className="gallery-grid">
                    {outboundDestinations.map((ele)=> {
                        return (
                            <div className="gallery-item">
                                <div className="img-div">
                                    <div className="overlay"></div>
                                    <a href="#contact-form"><p className="destination-button">Contact Now</p></a>
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