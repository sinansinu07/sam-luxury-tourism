import "./AbudhabiTourActivities.scss"

import { FaCartArrowDown, FaRunning } from "react-icons/fa"
import { abudhabiTourActivities, abudhabiTourCategory } from "../../../DataSets/abudhabiTourActivities"
import { IoIosArrowDown } from "react-icons/io"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../../Context/AuthContext"


export default function AbudhabiTourActivities({selectedCategory, setSelectedCategory}) {
    const navigate = useNavigate()
    const { currencyValue, selectedCurrencySymbol, searchActivityName, setSearchActivityName } = useAuth()
    const [ sortBy, setSortBy ] = useState("")
    const getProcessedActivities = () => {
       // Apply category and price filters
       let filteredArray = abudhabiTourActivities.filter((ele) => {
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

   const totalFilteredItems = abudhabiTourActivities.filter((ele) => {
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
            <div className="abudhabi-tour-activities section-container">
                    <div className="activities-filter-div">
                        <div className="filter-div">
                            <div className="number-div">
                                <FaRunning />
                                <p><span>{totalFilteredItems}</span> things to do in Abudhabi</p>
                            </div>
                            <div className="category-filter-div">
                                {/* {selectedCategory && <div className="category-name active"><p>{selectedCategory}</p></div>} */}
                                <div className={`select-div ${selectedCategory ? "active" : ""}`}>
                                    <select value={selectedCategory} onChange={(e) => {setSelectedCategory(e.target.value)}}>
                                        <option value="">All</option>
                                        {abudhabiTourCategory.map((ele) => {
                                            return (
                                                <option value={ele.name} key={ele.id}>{ele.name}</option>
                                            )
                                        })}
                                    </select>
                                    <IoIosArrowDown />
                                </div>
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
                    <div className="activities-section-grid">
                        {getProcessedActivities().length > 0 ? (
                            getProcessedActivities().map((service) => {
                                return (
                                    <div className="activities-grid-item"
                                        key={service?.id}
                                        onClick={() => {navigate(`/tour-abudhabi/${service?.slug}`)}}
                                    >
                                        {/* <div className="overlay"></div> */}
                                        <div className="item-image-div">
                                            {/* <div className="read-more"><LuMoveRight /></div> */}
                                            <img src={service?.image} alt={service?.name} />
                                        </div>
                                        <div className="item-content">
                                            <h1 className="item-name">{service?.name}</h1>
                                            <p className="item-price">{selectedCurrencySymbol} {(service.price * currencyValue).toFixed(2)}</p>
                                            <div className="add-to-cart"><FaCartArrowDown /></div>
                                            {/* <p className="item-description">{service?.description}</p> */}
                                        </div>
                                    </div>
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