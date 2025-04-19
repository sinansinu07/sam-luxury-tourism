import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css';

import "./Testimonials.scss"

import quote from "../../../Assets/Common/quote.png"
import profile from "../../../Assets/Common/dummy-profile.jpg"

const testimonials = [
    {
        id: 1,
        name: "Emily Johnson",
        position: "Frequent Traveler",
        title: "Amazing Travel Experience!",
        description: "SAM Tour and Travels made my vacation stress-free! The planning, accommodations, and customer service were top-notch. Highly recommend!"
    },
    {
        id: 2,
        name: "Michael Smith",
        position: "Business Traveler",
        title: "Seamless Business Trip",
        description: "Their team handled my last-minute travel arrangements perfectly. Smooth booking process and excellent support throughout. Will book again!"
    },
    {
        id: 3,
        name: "Sophia Martinez",
        position: "Adventure Enthusiast",
        title: "Unforgettable Adventures!",
        description: "Had an incredible adventure trip with SAM Tours! The itinerary was well-organized, and the guides were knowledgeable. Truly a memorable experience."
    },
    {
        id: 4,
        name: "David Wilson",
        position: "Honeymoon Traveler",
        title: "Perfect Honeymoon Getaway",
        description: "Our honeymoon was beyond perfect, thanks to SAM Tour and Travels. The resorts and activities were amazing, making our trip so special!"
    },
    {
        id: 5,
        name: "Jessica Brown",
        position: "Solo Traveler",
        title: "Safe & Enjoyable Solo Travel",
        description: "As a solo traveler, I felt completely safe and well taken care of. The team provided great recommendations and seamless travel arrangements."
    },
    {
        id: 6,
        name: "Robert Davis",
        position: "Family Vacationer",
        title: "Stress-Free Family Trip",
        description: "Traveling with kids is hard, but SAM Tours made it effortless! Great accommodations, fun activities, and smooth logistics. Thank you!"
    }
];

export default function Testimonials() {
    return (
        <section>
            <div className="testimonials container">
                <div className="heading-section">
                    <div className="title">
                        <h3>Testimonials</h3>
                    </div>
                    <div className="sub-title">
                        <h1>What Our Traveler Say About<br/> Our Tour Services</h1>
                    </div>
                </div>
                <Splide
                    options={{
                        perPage: 3,
                        perMove: 2,
                        gap: "20px",
                        autoplay: true,
                        speed: 2000,
                        rewind: true,
                        rewindByDrag: true,
                        pagination: false,
                        arrows: false,
                    }}
                    className="testimonials-grid"
                    >
                    {testimonials.map((testimonial) => (
                        <SplideSlide key={testimonial.id}>
                            <div className="testimonials-card">
                                <div className="head-section">
                                    <div className="img-div">
                                        <img src={quote} alt="" />
                                    </div>
                                    <div className="title-div">
                                        <h3>{testimonial.title}</h3>
                                        <div className="rating">
                                            <span className="star">&#9733;</span>
                                            <span className="star">&#9733;</span>
                                            <span className="star">&#9733;</span>
                                            <span className="star">&#9733;</span>
                                            <span className="star">&#9734;</span>
                                        </div>
                                    </div>
                                </div>
                                <p>
                                    {testimonial.description}
                                </p>
                                <div className="name-section">
                                    <img src={profile} alt="" />
                                    <div className="name-div">
                                        <h4>{testimonial.name}</h4>
                                        <h5>{testimonial.position}</h5>
                                    </div>
                                </div>
                                
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </section>
    )
}