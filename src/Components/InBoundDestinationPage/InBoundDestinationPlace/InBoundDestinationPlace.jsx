import { Fragment, useState } from "react"

import "./InBoundDestinationPlace.scss"

import dubaiImage from "../../../Assets/Tour/Dubai/burj-khalifa-1.webp"
import abudhabiImage from "../../../Assets/Tour/Abudhabi/abudhabi-banner.webp"
import InBoundDestinationContactForm from "../InBoundDestinationContactForm/InBoundDestinationContactForm"

export default function InBoundDestinationPlace() {
    const [selectedCity, setSelectedCity] = useState("Dubai")
    const [ emptyForm, setEmptyForm ] = useState(false)
    return (
        <Fragment>
            <section>
                <div className="inbound-destination-place container">
                    <div className="commonHeading">
                        <h1 className="title">InBound Destinations</h1>
                        <h2 className="subtitle">Most popular City to Visit</h2>
                        <div className="gallery-grid">
                            <div className="gallery-item" onClick={() => {
                                setSelectedCity("Dubai")
                                setEmptyForm(true)
                                }}>
                                <div className="img-div">
                                    <div className="overlay"></div>
                                    <a href="#contact-form" onClick={() => {
                                        setSelectedCity("Dubai")
                                        setEmptyForm(true)
                                        console.log("Empty Form" + emptyForm)
                                        }}><p className="destination-button">Inquiry Tour</p></a>
                                    <img src={dubaiImage} alt="" />
                                    <h1 className="destination-name">Dubai</h1>
                                    {/* {ele.label && <p className="destination-label">{ele.label}</p>} */}
                                </div>
                            </div>
                            <div className="gallery-item">
                                <div className="img-div" onClick={() => {
                                    setSelectedCity("Abudhabi")
                                    setEmptyForm(true)
                                    }}>
                                    <div className="overlay"></div>
                                    <a href="#contact-form"><p className="destination-button">Inquiry Tour</p></a>
                                    <img src={abudhabiImage} alt="" />
                                    <h1 className="destination-name">Abudhabi</h1>
                                    {/* {ele.label && <p className="destination-label">{ele.label}</p>} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <section id="activities">
                    {selectedCity === "dubai" ? (
                        <Fragment >
                            <DubaiTourCategories/>
                        </Fragment>
                    ):(
                        <Fragment>
                            <AbudhabiTourCategories/>
                        </Fragment>
                    )}
                </section> */}
            </section>
            <InBoundDestinationContactForm selectedCity={selectedCity} setSelectedCity={setSelectedCity} emptyForm={emptyForm} />
        </Fragment>
    )
}