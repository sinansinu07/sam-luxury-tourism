import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css';

import "./WhatWeProvide.scss"

import icon1 from "../../../Assets/Services/1.png"
import icon2 from "../../../Assets/Services/2.png"
import icon3 from "../../../Assets/Services/3.png"
import icon4 from "../../../Assets/Services/4.png"
import icon5 from "../../../Assets/Services/5.png"
import icon6 from "../../../Assets/Services/6.png"

const services = [
    {
        id: 1,
        title: "TAILOR-MADE PACKAGES",
        icon: icon1,
        description: "SAM Luxury Tourism stands out as a premier travel company, specializing in tailor-made travel packages across the UAE and beyond. Our experts design personalized itineraries to bring your dream journey to life.",
    },
    {
        id: 2,
        title: "DESERT SAFARI",
        icon: icon2,
        description: "Experience the ultimate blend of adventure and luxury with a Desert Safari by SAM Luxury Tourism. Indulge in authentic Arabian cuisine, captivating belly and tanoura dance performances, thrilling dune bashing, quad biking, star gazing, and more—all in one extraordinary journey.",
    },
    {
        id: 3,
        title: "INTERNATIONAL VISA",
        icon: icon3,
        description: "SAM Luxury Tourism’s International VISA services are renowned for their fast processing across various nationalities and destinations. For a smooth, efficient, and hassle-free VISA experience, SAM Luxury Tourism is the ideal choice.",
    },
    {
        id: 4,
        title: "RENTAL YACHT",
        icon: icon4,
        description: "Yachts represent the epitome of luxury that many dream of but few possess. SAM Luxury Tourism provides an extensive range of yachts to cater to all your desires. Whether it's for a party, gathering, business meeting, or a lavish day out with family, we have the perfect yacht for you.",
    },
    {
        id: 5,
        title: "LUXURY RENTAL CARS",
        icon: icon5,
        description: "A journey through the Emirates may leave you yearning for a luxurious drive in a top-tier rental car. Select your dream car—be it a Ferrari, Lamborghini, Rolls Royce, or Range Rover—and SAM Luxury Tourism will make it yours for an unforgettable adventure.",
    },
    {
        id: 6,
        title: "MULTIPLE DESTINATIONS",
        icon: icon6,
        description: "SAM Luxury Tourism presents exclusive tours to a range of destinations both in the UAE and globally. Discover the wonders of Dubai, Abu Dhabi, and Sharjah, or indulge in international journeys to Baku, Azerbaijan, Georgia, Turkey, Maldives, Thailand, and Singapore through our customized travel packages.",
    },
]

export default function WhatWeProvide() {
    return (
        <section>
            <div className="what-we-provide container">
                <div className="head-section">
                    <div className="left">
                        <div className="heading-section">
                            <div className="title">
                                <h3>What We Provide</h3>
                            </div>
                            {/* <div className="sub-title">
                                <h1>Most Trusted Tours and<br/> Travel Company</h1>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="services-grid">
                    {services.map((ele) => {
                        return (
                            <div className="service-card" key={ele.id}>
                                {/* <div className="icon"> */}
                                    <img src={ele.icon} alt=''/>
                                {/* </div> */}
                                <div className="details">
                                    <h1>{ele.title}</h1>
                                    <p>{ele.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}