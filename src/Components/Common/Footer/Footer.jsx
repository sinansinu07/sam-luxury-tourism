import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "./Footer.scss"

import logo from "../../../Assets/Logo/Sam Logo White 03-02-25-01.png"
import image1 from "../../../Assets/Outbound/georgia-2.jpg"
import image2 from "../../../Assets/Tour/Abudhabi/dessert-safari.jpg"
import image3 from "../../../Assets/Tour/Dubai/DubaiActivities/Balloon-Flight-Packages.jpg"
import image4 from "../../../Assets/Tour/Dubai/DubaiActivities/Ferrari-World-theme-park.jpg"
import image5 from "../../../Assets/Tour/Dubai/DubaiActivities/atlantis-aquaventure.webp"
import image6 from "../../../Assets/Tour/Dubai/DubaiActivities/sky-dive-dubai.avif"
import { MdOutlineLocationOn } from 'react-icons/md';
import { IoCallOutline, IoMailOpenOutline } from 'react-icons/io5';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const gallery = [
    {
        id: 1,
        img: image1
    },
    {
        id: 2,
        img: image2
    },
    {
        id: 3,
        img: image3
    },
    {
        id: 4,
        img: image4
    },
    {
        id: 5,
        img: image5
    },
    {
        id: 6,
        img: image6
    },
]

export default function Footer() {
    const location = useLocation()
    return (
<footer>
        <div className="footer">
            {/* <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={4}
                loop={true}
                speed={1000}
                effect="coverflow"
                grabCursor={true}
                autoplay={{
                    delay: 2000,  // Adjust scrolling speed
                    disableOnInteraction: false,  // Keeps autoplay running after user interaction
                }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 50,
                    modifier: 1,
                    slideShadows: false, 
                }}
                className="footer-gallery"
            >
                {gallery.map((gallery) => {
                    return (
                        <SwiperSlide key={gallery.id}>
                            <div className="gallery-div" key={gallery.id}>
                                <img src={gallery.img} alt=""/> 
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <hr/> */}
            <div className="contact-container container">
                <div className="contact">
                    <div className="icon-div">
                        <MdOutlineLocationOn />
                    </div>
                    <div className="contact-details">
                        <h3>Location</h3>
                        <p><a href="https://maps.app.goo.gl/ckcPey1pUtad7ZH89">506-29, SAM Office,<br/> ACICO Business Park,<br/>Port Saeed, Dubai </a></p>
                    </div>
                </div>
                <div className="contact">
                    <div className="icon-div">
                        <IoMailOpenOutline />
                    </div>
                    <div className="contact-details">
                        <h3>Email</h3>
                        <p><a href="mailto:booking@samluxurytours.com">booking@samluxurytours.com</a></p>
                    </div>
                </div>
                <div className="contact">
                    <div className="icon-div">
                        <IoCallOutline />
                    </div>
                    <div className="contact-details">
                        <h3>Contact</h3>
                        <p><a href="tel:+97143412570">+971 43412570</a></p>
                        <p><a href="tel:+971509572155">+971 509572155</a></p>
                        
                    </div>
                </div>
                <div className="social-links">
                    <a href="https://www.facebook.com/samluxurytours/"><div className="social-icon">
                        <FaFacebookF />
                    </div></a>
                    {/* <div className="social-icon">
                        <FaTwitter />
                    </div> */}
                    <a href="https://youtube.com/@samtourism?si=eHlBWYodzHNetUO0/"><div className="social-icon">
                        <FaYoutube />
                    </div></a>
                    <a href="https://www.instagram.com/samluxurytourism?igsh=dHRwZmdseWF2MWsy&utm_source=ig_contact_invite/"><div className="social-icon">
                        <FaInstagram />
                    </div></a>
                    <a href="https://www.linkedin.com/company/sam-luxury-tourism-llc/"><div className="social-icon">
                        <FaLinkedinIn />
                    </div></a>
                </div>
            </div>
            <hr/>
            <div className="footer-row container">
                <div className="footer_col">
                    <div className="dashborad-heading">
                        <h1 className='dashborad-main-heading'>About</h1>
                        {/* <h3 className="dashborad-second-heading">Club</h3> */}
                    </div>
                    <div className="contact_content">
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                        <p>SAM Luxury Tourism is a prestigious Dubai-based luxury travel and tourism company dedicated to curating extraordinary travel experiences for discerning clients.</p>
                    </div>
                </div>
                <div className="footer_col">
                    <div className="dashborad-heading">
                        <h1 className='dashborad-main-heading'>Information</h1>
                        {/* <h3 className="dashborad-second-heading">Club</h3> */}
                    </div>
                    <ul>
                        <li><a href="/" className={location.pathname==="/" ? "active" : ""}>Home</a></li>
                        <li><a href="/tour-dubai" className={location.pathname==="/tour-dubai" ? "active" : ""}>Dubai Tour</a></li>
                        <li><a href="/tour-abudhabi" className={location.pathname==="/tour-abudhabi" ? "active" : ""}>Abudhabi Tour</a></li>
                        <li><a href="/destination-inbound" className={location.pathname==="/destination-inbound" ? "active" : ""}>InBound Destination</a></li>
                        <li><a href="/destination-outbound" className={location.pathname==="/destination-outbound" ? "active" : ""}>OutBound Destination</a></li>
                        <li><a href="/about-us" className={location.pathname==="/about-us" ? "active" : ""}>About</a></li>
                        <li><a href="/contact-us" className={location.pathname==="/contact-us" ? "active" : ""}>Contact Us</a></li>

                    </ul>
                </div>
                <div className="footer_col">
                <div className="dashborad-heading">
                        <h1 className='dashborad-main-heading'>Services</h1>
                        {/* <h3 className="dashborad-second-heading">Club</h3> */}
                    </div>
                    <ul>
                        <li>Visa</li>
                        <li>Flight</li>
                        <li>Hotel</li>
                        <li>Rent a Car</li>
                    </ul>
                </div>
                <div className="footer_col">
                <div className="dashborad-heading">
                        <h1 className='dashborad-main-heading'>Newsletter</h1>
                        {/* <h3 className="dashborad-second-heading">Club</h3> */}
                    </div>
                    <div className="newsletter_details">
                        <p>Enter your email address below to subscribe to our newsletter and keep up to date with discounts and special offers.</p>
                        <div className="newsletter_input">
                            <input className="input" type="text" placeholder="Enter your email address"/>
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="footer-bottom container">
                <p>Copyright 2024 SAM Luxury Tourism. All rights reserved.</p>
                <div className="links">
                    <p>Settings & Privacy</p>
                    <p>Faqs</p>
                    <p>Support</p>
                </div>
            </div>
        </div>
    </footer>
    )
    
}