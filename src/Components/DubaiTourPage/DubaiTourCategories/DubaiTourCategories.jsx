import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { dubaiTourCategory } from '../../../DataSets/dubaiTourActivities';
import { LuMoveRight } from 'react-icons/lu';
import { FaCartArrowDown } from 'react-icons/fa';

import "./DubaiTourCategories.scss"
import DubaiTourActivities from '../DubaiTourActivities/DubaiTourActivities';
import { useState } from 'react';

export default function DubaiTourCategories() {
    let swiperRef = null;
    const [ selectedCategory, setSelectedCategory ] = useState("")

    return (
        <section>
            <div className="dubai-tour-categories">
                <div className="heading-section">
                    <div className="title">
                        <h3>Popular Tour & Activities</h3>
                    </div>
                    <div className="sub-title">
                        <h1>Explore the Best Experiences and<br/> Adventures in Dubai</h1>
                    </div>
                </div>
                <Swiper
                    spaceBetween={100}
                    slidesPerView={4}
                    // slidesPerGroup={4}
                    loop={true}
                    speed={500}
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
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="categories-grid-container"
                    onSwiper={(swiper) => (swiperRef = swiper)}
                    breakpoints={{
                        2100: {
                            slidesPerView: 6,  // 5 slides per view for very large screens
                        },
                        1700: {
                            slidesPerView: 5,  // 4 slides per view when width is >= 1400px
                        },
                        1300: {
                            slidesPerView: 4,  // 3 slides per view when width is >= 1100px
                        },
                        1000: {
                            slidesPerView: 3,  // 1 slide per view when width is >= 600px
                            spaceBetween: 100,
                        },
                        700: {
                            slidesPerView: 2,  // 1 slide per view for very small screens
                            spaceBetween: 100,
                        },
                        450: {
                            slidesPerView: 1,  // 1 slide per view for even smaller screens
                        },
                        300: {
                            slidesPerView: 1,  // 1 slide per view for even smaller screens
                        },
                    }}
                >
                {/* <div className="popular-section-grid"> */}
                    {dubaiTourCategory.map((service) => {
                        return (
                            <SwiperSlide 
                                key={service.id}
                                onMouseEnter={() => swiperRef?.autoplay.stop()}
                                onMouseLeave={() => swiperRef?.autoplay.start()}
                                >
                                <div 
                                    className="categories-grid-item"
                                    key={service.id}
                                    onClick={() => {setSelectedCategory(service.name)}}>
                                    <img src={service.image} alt=""/>
                                    <div className="overlay"></div>
                                    {/* <div className="item-icon">{service.icon}</div> */}
                                    <div className="item-content">
                                        <h1 className="item-title">{service.name}</h1>
                                        <p className="item-description">{service.description}</p>
                                        {/* <div className="read-more">Read More<LuMoveRight /></div> */}
                                    </div>
                                    {/* <div className="add-to-cart"><FaCartArrowDown /></div> */}
                                </div>
                            </SwiperSlide>
                        )
                    })}
                    <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                        <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                        {/* <div className="swiper-pagination"></div> */}
                    </div>
                </Swiper>
            </div>
            <DubaiTourActivities selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        </section>
    )
}