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
        title: "Tailor-Made Travel Packages",
        icon: icon1,
        description: "SAM Luxury Tourism is a premier luxury travel company specializing in customized travel packages across the UAE and internationally. Our team of experts designs personalized itineraries to bring your dream luxury journey to life, offering unique experiences that match your interests and desires.",
    },
    {
        id: 2,
        title: "Desert Safari",
        icon: icon2,
        description: "Experience the perfect blend of adventure and luxury with a Desert Safari by SAM Luxury Tourism. Indulge in authentic Arabian cuisine, enjoy captivating belly and tanoura dance performances, and take part in thrilling dune bashing and quad biking. Don’t miss the opportunity for star gazing and more—this is a truly extraordinary journey through the heart of the desert.",
    },
    {
        id: 3,
        title: "International Visa Services",
        icon: icon3,
        description: "SAM Luxury Tourism offers reliable and fast international visa services, making the visa process seamless for various nationalities and destinations. With our efficient service, you can enjoy a hassle-free visa experience and focus on planning your next luxury trip.",
    },
    {
        id: 4,
        title: "Luxury Yacht Rental",
        icon: icon4,
        description: "Yachts symbolize the ultimate in luxury travel, and SAM Luxury Tourism provides an exclusive range of luxury yachts for your every need. Whether you're planning a party, business meeting, or a family getaway, our luxury yacht rentals offer a lavish experience on the water.",
    },
    {
        id: 5,
        title: "Luxury Car Rentals",
        icon: icon5,
        description: "For those seeking an unforgettable driving experience, SAM Luxury Tourism offers luxury car rentals featuring top-tier vehicles like Ferrari, Lamborghini, Rolls Royce, and Range Rover. Embark on your luxury journey through the Emirates in style and comfort with our premium rental cars.",
    },
    {
        id: 6,
        title: "Multiple Destinations",
        icon: icon6,
        description: "SAM Luxury Tourism offers exclusive tours to both local UAE destinations and international hotspots. Discover the wonders of Dubai, Abu Dhabi, and Sharjah, or embark on customized travel packages to international destinations such as Baku, Azerbaijan, Georgia, Turkey, Maldives, Thailand, and Singapore. Our luxury tours are designed to provide an unforgettable experience at every stop.",
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