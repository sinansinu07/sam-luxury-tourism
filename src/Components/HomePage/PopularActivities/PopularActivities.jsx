import "./PopularActivities.scss"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { LuBike, LuMoveRight } from "react-icons/lu";
import { IoFastFood } from "react-icons/io5"
import { GiBoatFishing, GiCampfire, GiCampingTent, GiSittingDog, GiSolarPower } from "react-icons/gi"
import { MdOutlineSecurity } from "react-icons/md"
import { BsRouter } from "react-icons/bs"
import { CgGym } from "react-icons/cg"
import { FaCartArrowDown } from "react-icons/fa"
import { dubaiTourActivities } from "../../../DataSets/dubaiTourActivities"
import { abudhabiTourActivities } from "../../../DataSets/abudhabiTourActivities"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext";

let popularTourActivities = [
    ...dubaiTourActivities.filter(ele => ele.isFeatured),
    ...abudhabiTourActivities.filter(ele => ele.isFeatured)
];

export default function PopularActivities() {
    const navigate = useNavigate()
    const { currencyValue, selectedCurrencySymbol } = useAuth()
    return (
        <section>
            <div className="popular-services section-container">
                {/* <div className="heading-section">
                    <div className="title">
                        <h3>Popular Services</h3>
                    </div>
                    <div className="sub-title">
                        <h1>Amazing Adventure Camping Services<br/> for Enjoyed</h1>
                    </div>
                </div> */}
                {/* <Swiper
                    // modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={4}
                    loop={true}
                    speed={1000}
                    effect="coverflow"
                    grabCursor={true}
                    // autoplay={{
                    //     delay: 2000,  // Adjust scrolling speed
                    //     disableOnInteraction: false,  // Keeps autoplay running after user interaction
                    // }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 50,
                        modifier: 1,
                        slideShadows: false, 
                    }}
                    // className="services-section-grid"
                > */}
                    <div className="services-section-grid">
                        {popularTourActivities.map((service) => {
                            return (
                                // <SwiperSlide key={service?.id}>
                                    <div 
                                        className="services-grid-item"
                                        key={service?.id}
                                        onClick={() => {navigate(`/${service?.category.includes("Abudhabi") ? "tour-abudhabi" : "tour-dubai"}/${service?.slug}`)}}>
                                        {/* <div className="overlay"></div> */}
                                        <div className="item-image-div">
                                            {/* <div className="read-more"><LuMoveRight /></div> */}
                                            <img src={service?.image} alt={service?.title} />
                                        </div>
                                        <div className="item-content">
                                            <h1 className="item-name">{service?.name}</h1>
                                            <p className="item-price">{selectedCurrencySymbol} {(service.price * currencyValue).toFixed(2)}</p>
                                            <div className="add-to-cart"><FaCartArrowDown /></div>
                                            {/* <p className="item-description">{service?.description}</p> */}
                                            {/* <div className="item-icons">
                                                <IoFastFood />
                                                <GiSittingDog />
                                                <GiCampingTent />
                                                <GiCampfire />
                                            </div> */}
                                        </div>
                                    </div>
                                // </SwiperSlide>
                            )
                        })}
                    </div>
                {/* </Swiper> */}
                {/* <div className="service-allowance-grid">
                    {serviceAllowance.map((ele) => {
                        return (
                            <div className="service-allowance-item">
                                <div className="icon-div">
                                    {ele.icon}
                                </div>
                               <div className="content-div">
                                    <h1 className="content-name">{ele.name}</h1>
                                    <p className="content-description">{ele.description}</p>
                               </div>
                            </div>
                        )
                    })}
                </div> */}
            </div>
        </section>
    )
}