import { Fragment, useEffect, useState } from "react";
import { abudhabiTourActivities } from "../../../DataSets/abudhabiTourActivities";

import "./TourDetailPage.scss";
import { MdAttachMoney, MdDateRange } from "react-icons/md";
import { IoIosArrowDown, IoIosTimer } from "react-icons/io";
import { TbCreditCardRefund } from "react-icons/tb";
import { BsLightning } from "react-icons/bs";
import { HiGlobeAmericas } from "react-icons/hi2";
import { IoCarSportOutline } from "react-icons/io5";
import { PiMapPinAreaBold } from "react-icons/pi";
import { FaCartArrowDown } from "react-icons/fa";
import { TfiHandPointRight } from "react-icons/tfi";
import { VscDebugBreakpointConditional } from "react-icons/vsc";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowRightLong } from "react-icons/fa6";
import { useAuth } from "../../../Context/AuthContext";
import DatePicker from 'react-datepicker';
import { format, parseISO } from "date-fns";

// const tour = abudhabiTourActivities.find(ele => ele.id === 7);

export default function DubaiTourDetailPage() {
    const {activityName} = useParams()
    const dispatch = useDispatch()
    const { currencyValue, selectedCurrencySymbol } = useAuth()

    const oldCart = useSelector(state => {
        return state.cart.data
    })

    console.log("Old Cart", oldCart)
    
    const currentTour = abudhabiTourActivities.find(ele => ele?.slug === activityName)
    console.log(currentTour)
    
    const [ onHoverOperatingHours, setOnHoverOperatingHours ] = useState(false);

    const [cart, setCart] = useState({
        lineItems: [],
        totalAmount: 0,
    });

    console.log("New Cart", cart)
    

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top-left corner of the page
    }, []);

    const handleCartUpdate = (index, field, value) => {
        setCart((prevCart) => {
            let updatedLineItems = [...prevCart.lineItems];
            
            // Find the item in the lineItems array by the tourOption name
            let item = updatedLineItems.find(item => item.tourOption === currentTour?.tourOption[index].name);
    
            // If item doesn't exist, create it
            if (!item) {
                item = { 
                    name: currentTour?.name,
                    tourOption: currentTour?.tourOption[index].name,
                    transferOption: currentTour?.tourOption[index].transferOption[0], // Default Transfer Option
                    date: "",
                    adult: 1,
                    child: 0,
                    hour: 1,
                    amount: 0,
                };
                updatedLineItems.push(item);
            }
    
            // Update the specific field of the item
            item[field] = value;
    
            // Recalculate amount
            const transferOption = item.transferOption || {};
            const transferPrice = transferOption.transferPrice || 0;
            const adultPrice = transferOption.adultPrice || 0;
            const childPrice = transferOption.childPrice || 0;
    
            // Calculate the amount correctly
            if (adultPrice === 0 && childPrice === 0) {
                item.amount = item?.hour ? item.hour * transferPrice : transferPrice;
            } else {
                item.amount = ((item?.hour ? item.hour * transferPrice : transferPrice) +
                               (item?.adult || 0) * adultPrice + 
                               (item?.child || 0) * childPrice);
            }
    
            return {
                ...prevCart,
                lineItems: updatedLineItems,
                totalAmount: updatedLineItems.reduce((sum, lineItem) => sum + (lineItem.amount || 0), 0),
            };
        });
    };
    
    
    // const handleAddtoCart = () => {
    //     // console.log("Old cart", cart)
    //     if(cart?.lineItems?.length === 0) {
    //         alert("Select Tour from the Tour List")
    //     } else if(oldCart) {
    //         console.log("Old cart is there", oldCart)
    //         let newCart = oldCart
    //         cart?.lineItems?.forEach((ele) => {
    //             newCart?.lineItems?.push(ele)
    //         })
    //         newCart.totalAmount = newCart?.lineItems?.reduce((sum, item) => sum + item.amount, 0)
    //         // console.log("new cart", newCart)
    //         localStorage.setItem("cart", newCart);
    //         alert("Item Added to Cart")
    //         // dispatch(startAddToCart(newCart))
    //     } else {
    //         console.log("Creating new cart")
    //         console.log(cart)
    //         localStorage.setItem("cart", JSON.stringify(cart));
    //         alert("Item Added to Cart")
    //     }
    // }

    const handleAddtoCart = () => {
        if (cart?.lineItems?.length === 0) {
            alert("Select Tour from the Tour List");
            return;
        }
    
        const isAnyDateMissing = cart?.lineItems?.some((ele) => !ele.date);
    
        if (isAnyDateMissing) {
            alert("Select Date for all the selected Tours");
            return;
        }
    
        let newCart;
    
        if (oldCart && oldCart.lineItems) {  // Check if oldCart and oldCart.lineItems exist
            console.log("Old cart is there", oldCart);
    
            // Check for duplicate lineItems
            const existingTourOptions = new Set(oldCart.lineItems.map(item => item.tourOption)); // Store all tourOptions in the oldCart
    
            const duplicateItems = cart.lineItems.filter(item => existingTourOptions.has(item.tourOption));
    
            if (duplicateItems.length > 0) {
                alert(`The following tours are already in the cart: ${duplicateItems.map(item => item.tourOption).join(", ")}`);
                return; // Stop the function if there are duplicates
            }
    
            // Create a deep copy of the old cart and add the new items
            newCart = { 
                ...oldCart, 
                lineItems: [...oldCart.lineItems, ...cart.lineItems]
            };
    
            // Update the total amount
            newCart.totalAmount = newCart.lineItems.reduce((sum, item) => sum + item.amount, 0);
    
        } else {
            console.log("Creating new cart");
    
            // If oldCart is not present, use the current cart
            newCart = { ...cart };
        }
    
        console.log("New cart", newCart);
    
        // Save the updated cart to localStorage
        localStorage.setItem("cart", JSON.stringify(newCart));
        alert("Item Added to Cart");
        setCart("")
    
        // Dispatch the updated cart if needed
        // dispatch(startAddToCart(newCart));
    };
    
    
    

    return (
        <Fragment>
            <section className="tour-detail-section" id="tour-detail-hero">
                <div className="tour-detail-hero">
                    <div className="banner-wrapper">
                        <img src={currentTour?.image} alt="Tour Banner" className="banner" />
                        <div className="overlay"></div>
                    </div>
                    <div className="tour-detail-hero-content">
                        <div className="hero-content">
                            <div className="hero-title-div">
                                <h1 className="hero-title">{currentTour?.name}</h1>
                                <p>{currentTour?.city}, United Arab Emirates</p>
                            </div>
                            <div className="price-div">{selectedCurrencySymbol} {(currentTour.price * currencyValue).toFixed(2)}</div>
                        </div>
                    </div>
                </div>
                <div className="tour-details-div-content">
                    <div className="tour-details-div">
                        <div className="details">
                            <PiMapPinAreaBold />
                            <span>Google Map</span>
                        </div>
                        <div className="details">
                            <IoCarSportOutline />
                            <span>Transfer Options Available</span>
                        </div>
                        <div className="details">
                            <BsLightning />
                            <span>Instant Confirmation</span>
                        </div>
                        <div className="details">
                            <TbCreditCardRefund />
                            <span>Non Refundable</span>
                        </div>
                        <div className="details">
                            <HiGlobeAmericas />
                            <span>English</span>
                        </div>
                        <div className="details" onMouseEnter={() => setOnHoverOperatingHours(true)} onMouseLeave={() => setOnHoverOperatingHours(false)}>
                            <IoIosTimer />
                            <span>Operating Hours</span>
                            {onHoverOperatingHours && (
                                <div className="details-content">
                                    <p>From {currentTour?.pickUpTime} to {currentTour?.dropOffTime}</p>
                                </div>
                            )}
                        </div>
                        
                    </div>
                </div>
            </section>
            <section id="tour-content-detail" className="tour-content-detail">
                <div className="tour-price-cart">
                    <div className="heading">
                        <h2>Price & Offers</h2>
                        <p>Scroll for More <FaArrowRightLong /></p>
                    </div>
                    <div className="tour-price-table">
                        <div className="tour-price-row heading">
                            <div className="coloumn coloumn-1">Tour Option</div>
                            <div className="coloumn coloumn-2">Transfer Option</div>
                            <div className="coloumn coloumn-3">Tour Date</div>
                            { ((currentTour?.slug !== "yacht-rental-in-dubai")  && (currentTour?.slug !== "luxury-super-yacht-charter")) && <div className="coloumn coloumn-4">Adult</div>}
                            { ((currentTour?.slug !== "yacht-rental-in-dubai")  && (currentTour?.slug !== "luxury-super-yacht-charter")) && <div className="coloumn coloumn-5">Child</div>}
                            { ((currentTour?.slug === "yacht-rental-in-dubai")  || (currentTour?.slug === "luxury-super-yacht-charter")) && <div className="coloumn coloumn-6">Hour</div>}
                            <div className="coloumn coloumn-7">Total Amount</div>
                        </div>

                        {currentTour?.tourOption.map((tourOption, index) => {
                            const selectedTransfer = tourOption?.transferOption[0]; // Default to "Sharing Transfer"
                            const isChecked = cart?.lineItems?.some((item) => item?.tourOption === tourOption?.name);

                            const currentCartItem = cart?.lineItems?.find(
                                (item) => item?.tourOption === tourOption?.name
                            );
                             return (
                                <div key={tourOption.id} className="tour-price-row detail">
                                    <div className="coloumn coloumn-1">
                                        <input 
                                            type="checkbox" 
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    // Add item to cart
                                                    setCart((prevCart) => {
                                                        const newItem = {
                                                            name: currentTour?.name,
                                                            tourOption: tourOption?.name,
                                                            transferOption: selectedTransfer,
                                                            date: "", 
                                                            adult: 1, 
                                                            child: 0, 
                                                            hour: 0,
                                                            amount: selectedTransfer?.adultPrice, // Default price
                                                        };
                                                        return {
                                                            ...prevCart,
                                                            lineItems: [...prevCart?.lineItems, newItem],
                                                            totalAmount: prevCart?.totalAmount + newItem?.amount,
                                                        };
                                                    });
                                                } else {
                                                    // Remove item from cart
                                                    setCart((prevCart) => {
                                                        const updatedItems = prevCart?.lineItems?.filter(
                                                            (item) => item?.tourOption !== tourOption.name
                                                        );
                                                        const removedAmount = prevCart.lineItems.find(
                                                            (item) => item?.tourOption === tourOption?.name
                                                        )?.amount || 0;
                                                        return {
                                                            ...prevCart,
                                                            lineItems: updatedItems,
                                                            totalAmount: prevCart?.totalAmount - removedAmount,
                                                        };
                                                    });
                                                }
                                            }} 
                                        />
                                        {tourOption.name}
                                    </div>

                                    <div className="coloumn coloumn-2">
                                        <div className="form-group">
                                            <select 
                                                disabled={!isChecked}
                                                onChange={(e) => handleCartUpdate(index, "transferOption", tourOption.transferOption.find(opt => opt.name === e.target.value))}
                                            >
                                                {tourOption.transferOption.map(opt => (
                                                    <option key={opt.id} value={opt.name}>{opt.name}</option>
                                                ))}
                                            </select>
                                            {/* <IoIosArrowDown className="icon" /> */}
                                        </div>
                                    </div>

                                    <div className="coloumn coloumn-3">
                                        <div className="form-group">
                                            <DatePicker
                                                selected={
                                                currentCartItem?.date ? parseISO(currentCartItem.date) : null
                                                }
                                                onChange={(date) => {
                                                if (date) {
                                                    const formattedDate = format(date, "yyyy-MM-dd");
                                                    handleCartUpdate(index, "date", formattedDate);
                                                }
                                                }}
                                                disabled={!isChecked}
                                                placeholderText="Select tour date"
                                                dateFormat="yyyy-MM-dd"
                                                className="tour-date"
                                                popperPlacement="bottom-start"
                                                popperClassName="custom-datepicker-popper"
                                                portalId="tour-datepicker-portal"
                                            />
                                            {/* <input 
                                                disabled={!isChecked}
                                                type="date" 
                                                onChange={(e) => handleCartUpdate(index, "date", e.target.value)}
                                            /> */}
                                            {/* <MdDateRange className="icon" /> */}
                                        </div>
                                    </div>
                                    {(currentTour?.slug !== "yacht-rental-in-dubai" && currentTour?.slug !== "luxury-super-yacht-charter") && (
                                        <div className="coloumn coloumn-4">
                                            <div className="form-group">
                                                <select
                                                    disabled={!isChecked}
                                                    onChange={(e) => handleCartUpdate(index, "adult", parseInt(e.target.value))}
                                                >
                                                    {[...Array(51).keys()].slice(1, 51).map(num => (
                                                        <option key={num} value={num}>{num}</option>
                                                    ))}
                                                </select>
                                                {/* <IoIosArrowDown className="icon" /> */}
                                            </div>
                                        </div>
                                    )}
                                    
                                    {(currentTour?.slug !== "yacht-rental-in-dubai" && currentTour?.slug !== "luxury-super-yacht-charter") && (
                                        <div className="coloumn coloumn-5">
                                            <div className="form-group">
                                                <select 
                                                    disabled={!isChecked}
                                                    onChange={(e) => handleCartUpdate(index, "child", parseInt(e.target.value))}
                                                >
                                                    {[...Array(51).keys()].map(num => (
                                                        <option key={num} value={num}>{num}</option>
                                                    ))}
                                                </select>
                                                {/* <IoIosArrowDown className="icon" /> */}
                                            </div>
                                        </div>
                                    )}
                                    
                                    {(currentTour?.slug === "yacht-rental-in-dubai" || currentTour?.slug === "luxury-super-yacht-charter") && (
                                        <div className="coloumn coloumn-6">
                                            <div className="form-group">
                                                <select 
                                                    disabled={!isChecked}
                                                    onChange={(e) => handleCartUpdate(index, "hour", parseInt(e.target.value))}
                                                >
                                                    {[...Array(25).keys()].slice(1).map(num => (
                                                        <option key={num} value={num}>{num}</option>
                                                    ))}
                                                </select>
                                            {/* <IoIosArrowDown className="icon" /> */}
                                            </div>
                                        </div>
                                    )}
                                    

                                    {/* <div className="coloumn coloumn-7">
                                    AED {isChecked ? cart.lineItems.find(item => item.tourOption === tourOption.name)?.amount || 0 : selectedTransfer.adultPrice ? selectedTransfer.adultPrice : selectedTransfer.transferPrice }
                                     AED {cart?.lineItems?.find(item => item?.tourOption === tourOption?.name)?.amount ? cart?.lineItems?.find(item => item?.tourOption === tourOption?.name)?.amount : selectedTransfer?.adultPrice ? selectedTransfer?.adultPrice : selectedTransfer?.transferPrice }
                                    </div> */}
                                    <div className="coloumn coloumn-7">
                                        {selectedCurrencySymbol} {(
                                        (cart?.lineItems?.find(item => item?.tourOption === tourOption?.name)?.amount 
                                            || selectedTransfer?.adultPrice 
                                            || selectedTransfer?.transferPrice
                                        ) * currencyValue
                                        ).toFixed(2)}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <button className="add-to-cart" onClick={handleAddtoCart}>Add to Cart <FaCartArrowDown/></button>
                </div>

                {currentTour?.overview && (
                    <div className="tour-overview">
                        <div className="heading">
                            <h2>OverView</h2>
                        </div>
                        <div className="content">
                            {currentTour?.overview?.map((ele) => {
                                return (
                                    <p key={ele.id} className="content-item">{ele.description}</p>
                                )
                            })}
                        </div>
                        <div className="content">
                            {currentTour?.about?.map((ele) => {
                                return (
                                    <p key={ele.id} className="content-item">{ele.description}</p>
                                )
                            })}
                        </div>
                    </div>
                )}

                {/* {currentTour?.about && (
                    <div className="tour-about-city">
                        <div className="heading">
                            <h2>About
                            </h2>
                        </div>
                        <div className="content">
                            {currentTour?.about.map((ele) => {
                                return (
                                    <p key={ele.id} className="content-item">{ele.description}</p>
                                )
                            })}
                        </div>
                    </div>
                )} */}

                {currentTour?.hightlights && (
                    <div className="tour-inclusions">
                        <div className="heading">
                        <h2>Highlights</h2>
                        </div>
                        <div className="content">
                            {currentTour?.hightlights.map((ele) => {
                                return (
                                    <li key={ele.id} className="content-item"><TfiHandPointRight />{ele.description}</li>
                                )
                            })}
                        </div>
                    </div>
                )}

                {currentTour?.inclusions && (
                    <div className="tour-inclusions">
                        <div className="heading">
                            <h2>Inclusion</h2>
                        </div>
                        <div className="content">
                            {currentTour?.inclusions.map((ele) => {
                                return (
                                    <li key={ele.id} className="content-item"><TfiHandPointRight />{ele.description}</li>
                                )
                            })}
                        </div>
                    </div>
                )}

                {currentTour?.exclusion && (
                    <div className="tour-inclusions">
                        <div className="heading">
                            <h2>Exclusion</h2>
                        </div>
                        <div className="content">
                            {currentTour?.exclusion.map((ele) => {
                                return (
                                    <li key={ele.id} className="content-item"><TfiHandPointRight />{ele.description}</li>
                                )
                            })}
                        </div>
                    </div>
                )}

                {currentTour?.ImportantNotes && (
                    <div className="tour-inclusions">
                        <div className="heading">
                            <h2>Important Notes</h2>
                        </div>
                        <div className="content">
                            {currentTour?.ImportantNotes.map((ele) => {
                                return (
                                    <li key={ele.id} className="content-item"><TfiHandPointRight />{ele.description}</li>
                                )
                            })}
                        </div>
                    </div>
                )}

                {currentTour?.cancellationProcess && (
                    <div className="tour-inclusions">
                        <div className="heading">
                            <h2>Cancellation Process</h2>
                        </div>
                        <div className="content">
                            {currentTour?.cancellationProcess.map((ele) => {
                                return (
                                    <li key={ele.id} className="content-item"><TfiHandPointRight />{ele.description}</li>
                                )
                            })}
                        </div>
                    </div>
                )}

                {currentTour?.keyPoint && (
                    <div className="tour-key-points">
                        <div className="heading">
                            <h2>Key Points</h2>
                        </div>
                        <div className="content">
                            {currentTour?.keyPoint.map((ele) => {
                                return (
                                    <div key={ele.id}>
                                        {ele.title && <li className="content-item"><TfiHandPointRight />{ele.title}</li>}
                                        {ele.description && <p> <VscDebugBreakpointConditional />{ele.description}</p>}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}
            </section>
        </Fragment>
    )
}