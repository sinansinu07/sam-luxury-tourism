import { useEffect, useState } from "react"
import { motion } from "framer-motion"

import "./DubaiTourHero.scss"

import { RiArrowLeftWideLine, RiArrowRightWideLine } from "react-icons/ri"
import { MdLocationPin, MdOutlineLocationOn } from "react-icons/md"
import { dubaiTourBanners } from "../../../DataSets/dubaiTourBanners"
import { useAuth } from "../../../Context/AuthContext"

export default function DubaiTourHero() {
    const {searchActivityName, setSearchActivityName} = useAuth()
    const images = dubaiTourBanners.map((ele) => {
        return ele.image
    });
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    console.log(searchActivityName)
      
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

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [currentIndex]);

    const textVariants = {
        initial: {
            y: 200,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeOut",
                staggerChildren: 0.1, // Stagger the children by 0.3s
            },
        },
      } 
    
    const childVariants = {
        initial: { y: 100, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { duration: 0.6 } },
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
        <section>
            <div className="dubai-tour-hero">
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
                    viewport={{ once: false }}
                    key={currentIndex}
                    className="hero-content section-container">
                        <motion.h1 variants={childVariants} className="title">{dubaiTourBanners[currentIndex].title}</motion.h1>
                        <motion.p variants={childVariants} className="description">{dubaiTourBanners[currentIndex].description}</motion.p>
                        <motion.div variants={childVariants} className="search-div">
                            <div className="search-box">
                                <MdLocationPin />
                                <input type="text" value={searchActivityName} onChange={(e) => {setSearchActivityName(e.target.value)}} placeholder="Search for popular Activities" className="search-input" />
                            </div>
                            <div className="search-button"><a href="#activities">Search</a></div>
                        </motion.div>

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
    </section>
    )
}