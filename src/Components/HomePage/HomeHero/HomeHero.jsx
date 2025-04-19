import { useState } from "react"
import { motion } from "framer-motion"

import "./HomeHero.scss"

import herobanner1 from "../../../Assets/Outbound/georgia-1.webp"
import herobanner2 from "../../../Assets/Tour/Dubai/abra.webp"
import herobanner3 from "../../../Assets/Tour/Dubai/DubaiActivities/surf-high-dubai.jpg"
import herobanner4 from "../../../Assets/Tour/Dubai/DubaiActivities/Sunseeker-Yacht-Dubai.jpeg"
import herobanner5 from "../../../Assets/Tour/Dubai/DubaiActivities/dessert-safari-dune.jpg"
// import image from "../../../Assets/Banners/insurance.jpg"
import image from "../../../Assets/Logo/Sam Logo 250X100.png"

import { RiArrowLeftWideLine, RiArrowRightWideLine } from "react-icons/ri"
import { BsFillHouseHeartFill } from "react-icons/bs"
import { FaCar, FaCcVisa, FaHeartbeat, FaHotel } from "react-icons/fa"
import { PiAirplaneInFlightFill } from "react-icons/pi"
import { MdDoubleArrow } from "react-icons/md"

export default function HomeHero() {
    const images = [herobanner1, herobanner2, herobanner3, herobanner4, herobanner5];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const travelDestinations = [
        {
          title: "Pick the best city for your Destination",
          description: "Find the ideal city that matches your travel dreams, whether it's for adventure, relaxation, or exploration. Let your journey begin in the perfect destination!"
        },
        {
          title: "Discover the Perfect Getaway for Your Holiday",
          description: "Escape to a destination that suits your holiday mood, from serene beaches to vibrant cities. Make unforgettable memories in your dream vacation spot!"
        },
        {
          title: "Embark on the Ultimate Adventure Trip",
          description: "Experience the thrill of adventure with breathtaking landscapes, adrenaline-filled activities, and unforgettable moments. Your next great journey starts here!"
        },
        {
          title: "Sail Away on an Unforgettable Cruise & Yacht Trip",
          description: "Indulge in luxury and serenity as you cruise through stunning waters, exploring hidden gems and exotic locations. Let the ocean be your escape!"
        },
        {
          title: "Experience the Magic of a Desert Safari",
          description: "Venture into the golden sands for a thrilling desert safari, where dune bashing, camel rides, and starry nights await. A journey like no other!"
        }
      ];
      

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.8 },
        },
        exit: (direction) => ({
            x: direction > 0 ? -1000 : 1000,
            opacity: 0,
            transition: { duration: 0.8 },
        }),
    };

    const textVariants = {
        initial: {
            y: 100,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeOut",
                staggerChildren: 0.3, // Stagger the children by 0.3s
            },
        },

        initial2: {
            y: 50,
            opacity: 0,
        },
        animate2: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeOut",
                staggerChildren: 0.3, // Stagger the children by 0.3s
            },
        },
      } 
    
    const childVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { duration: 0.6 } },
        initial2: { y: 30, opacity: 0 },
        animate2: { y: 0, opacity: 1, transition: { duration: 0.6 } },
    };

    const handlePrev = () => {
        setDirection(-1); // Set direction for the animation
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setDirection(1); // Set direction for the animation
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handleDotClick = (index) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };
    return (
        <section className="home-hero-section">
            <div className="home-hero">
                <motion.div
                    // key={currentIndex}
                    className="banner-wrapper"
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    >
                    <img src={images[currentIndex]} alt="Club Banner" className="banner" />
                </motion.div>
                <div className="overlay"></div>
                <RiArrowLeftWideLine className="arrow-left" onClick={handlePrev}/>
                <RiArrowRightWideLine  className="arrow-right" onClick={handleNext}/>
                <motion.div 
                    variants={textVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: false, amount: 0.5 }}
                    key={currentIndex}
                    className="hero-content section-container">
                        <h1 className="title">{travelDestinations[currentIndex].title}</h1>
                        <p className="description">{travelDestinations[currentIndex].description}</p>

                </motion.div>
                <div className="pagination-dots">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`dot ${index === currentIndex ? "active" : ""}`}
                            onClick={() => handleDotClick(index)}
                        ></div>
                    ))}
                </div>
            </div>
            <div className="home-about">
                <div className="section1">
                    <div className="section-div">
                        <FaCcVisa />
                        Visa
                    </div>
                    <hr/>
                    <div className="section-div">
                        <PiAirplaneInFlightFill />
                        Tour
                    </div>
                    <hr/>
                    <div className="section-div">
                        <FaHotel />
                        Hotel
                    </div>
                    <hr/>
                    <div className="section-div">
                        <FaCar />
                        Transfers
                    </div>
                </div>
                <div className="section2">
                    <div className="img-div">
                        <img src={image} alt=""/>
                    </div>
                    <h4>Experience Luxury, Explore the World with SAM </h4>
                </div>
                <div className="section3">
                    <h1>About Us</h1>
                    <p><b>SAM Luxury Tourism</b> is a prestigious Dubai-based luxury travel and tourism company dedicated to curating extraordinary travel experiences for discerning clients.<br/>
                    <span>With an unwavering commitment to excellence, personalized service, and an extensive network of partnerships, we strive to provide unparalleled luxury journeys that cater to the unique preferences and desires of our esteemed clientele.</span></p>
                </div>
            </div>
        </section>
    )
}