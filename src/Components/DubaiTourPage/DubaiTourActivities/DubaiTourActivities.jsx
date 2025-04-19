import "./DubaiTourActivities.scss"

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
import { FaCartArrowDown, FaRunning } from "react-icons/fa"
import { dubaiTourActivities, dubaiTourCategory } from "../../../DataSets/dubaiTourActivities"
import { useState } from "react"
import { IoIosArrowDown } from "react-icons/io"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../../Context/AuthContext";


export default function DubaiTourActivities({selectedCategory, setSelectedCategory}) {
    const { currencyValue, selectedCurrencySymbol, searchActivityName, setSearchActivityName } = useAuth()
    const navigate = useNavigate()

    const [ sortBy, setSortBy ] = useState("")

    const getProcessedActivities = () => {
        // Apply category and price filters
        let filteredArray = dubaiTourActivities.filter((ele) => {
            if (selectedCategory && !ele.category.includes(selectedCategory)) {
                return false; 
            }
            if (searchActivityName && !ele.name.toLowerCase().includes(searchActivityName.toLowerCase())) {
                return false;
            }
            return true;
        });

    //    Sort the array based on selected sort criteria
        filteredArray = filteredArray.sort((a, b) => {
            if (sortBy === "Name") {
                return a.name.localeCompare(b.name);
            } else if (sortBy === "City") {
                return a?.city?.localeCompare(b?.city);
            } else if (sortBy === "Price-LtoH") {
                return a.price - b.price;
            } else if (sortBy === "Price-HtoL") {
            return b.price - a.price;
        }
            return 0; // Default to no sorting
        });

        // Slice the array for pagination
    //    const startIndex = (currentPage - 1) * showNo;
    //    const endIndex = startIndex + showNo;
        return filteredArray
    //    .slice(startIndex, endIndex);
    };

    // dubaiTourActivities.forEach(ele => {
    //     console.log(ele.id)
    // })

    const totalFilteredItems = dubaiTourActivities.filter((ele) => {
        if (selectedCategory && !ele.category.includes(selectedCategory)) {
            return false;
        }
        if (searchActivityName && !ele.name.toLowerCase().includes(searchActivityName.toLowerCase())) {
            return false;
        }

        return true;
    }).length;
    return (
        <section id="activities">
            <div className="dubai-tour-services section-container">
                {/* <div className="heading-section">
                    <div className="title">
                        <h3>Best Tour & Activities in Dubai</h3>
                    </div>
                    <div className="sub-title">
                        <h1>Amazing Adventure Camping Services<br/> for Enjoyed</h1>
                    </div>
                </div> */}
                <div className="activities-filter-div">
                    <div className="filter-div">
                        <div className="number-div">
                            <FaRunning />
                            <p><span>{totalFilteredItems}</span> things to do in Dubai</p>
                        </div>
                        <div className="category-filter-div">
                            <div className={`select-div ${selectedCategory ? "active" : ""}`}>
                                <select value={selectedCategory} onChange={(e) => {setSelectedCategory(e.target.value)}}>
                                    <option value="">All</option>
                                    {dubaiTourCategory.map((ele) => {
                                        return (
                                            <option value={ele.name} key={ele.id}>{ele.name}</option>
                                        )
                                    })}
                                </select>
                                <IoIosArrowDown />
                            </div>
                            {/* {selectedCategory && <div className="category-name active"><p>{selectedCategory}</p></div>} */}
                            <button className={selectedCategory === "" ? "active" : ""} onClick={() => setSelectedCategory("")}>View All Tours</button>
                        </div>
                    </div>
                    <div className="sort-div">
                        <p>Sort Result by :</p>
                        <div className="select-div">
                            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                                <option value="Default">Default</option>
                                <option value="Name">Name</option>
                                <option value="City">City</option>
                                <option value="Price-HtoL">Price High to Low</option>
                                <option value="Price-LtoH">Price Low to High</option>
                            </select>
                            <IoIosArrowDown />
                        </div>
                    </div>
                </div>
                <div className="services-section-grid">
                    {getProcessedActivities().length > 0 ? (
                    getProcessedActivities().map((service) => {
                        return (
                            // <SwiperSlide key={service.id}>
                                <div 
                                    className="services-grid-item"
                                    key={service.id}
                                    onClick={() => {navigate(`/tour-dubai/${service.slug}`)}}
                                    >
                                    {/* <div className="overlay"></div> */}
                                    <div className="item-image-div">
                                        {/* <div className="read-more"><LuMoveRight /></div> */}
                                        <img src={service.image} alt={service.name} />
                                    </div>
                                    <div className="item-content">
                                        <h1 className="item-name">{service.name}</h1>
                                        <p className="item-price">{selectedCurrencySymbol} {(service.price * currencyValue).toFixed(2)}</p>
                                        <div className="add-to-cart"><FaCartArrowDown /></div>
                                        {/* <p className="item-description">{service.description}</p> */}
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
                    })
                    ) : (
                        <div className="no-activities-found">
                            <p >No Activities Found, Show all <span onClick={() => {
                                setSelectedCategory("")
                                setSearchActivityName("")
                                }}>Activities</span></p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}