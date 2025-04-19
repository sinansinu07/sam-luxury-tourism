import { useEffect, useState } from "react";
import "./InBoundDestinationContactForm.scss"

import { FaCalendarAlt, FaHotel, FaPaperPlane, FaPhoneAlt, FaUmbrellaBeach, FaUser } from "react-icons/fa";
import { IoIosArrowDown, IoMdMail } from "react-icons/io";
import { outboundDestinations } from "../../../DataSets/outboundDestinations";
import { MdDateRange } from "react-icons/md";
import { IoCarSport, IoClose, IoFastFood, IoTicket } from "react-icons/io5";
import { RiFlightTakeoffFill } from "react-icons/ri";
import { FaPersonSkiing } from "react-icons/fa6";
import { dubaiTourActivities } from "../../../DataSets/dubaiTourActivities";
import { abudhabiTourActivities } from "../../../DataSets/abudhabiTourActivities";
import { fiveStarHotels } from "../../../DataSets/fiveStarHotels";
import { threeStarHotels } from "../../../DataSets/threeStarHotels";
import { fourStartHotels } from "../../../DataSets/fourStarHotels";

import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_INBOUND_DESTINATION_FORM_TEMPLATE_ID;

export default function InBoundDestinationContactForm({ selectedCity, setSelectedCity, emptyForm }) {
    const [formData, setFormData] = useState({
        tourOptions: [],
        hotelOptions: [],
        visaType: "",
        visaNo: "",
        travelInsurance: "",
        flightRequired: "",
        journeyDate: "",
        returnDate: "",
        airportPickup: "",
        airportDropOff: "",
        fullName: "",
        email: "",
        phoneNo: "",
        noOfAdult: 0,
        noOfChild: 0,
        noOfInfant: 0,
        remarks: "",
    });

    const [ selectedTours, setSelectedTours ] = useState([]); 
    const [ selectedHotelCategory, setSelectedHotelCategory ] = useState("");
    const [ selectedHotels, setSelectedHotels ] = useState([]);

    const [ flightRequired, setFlightRequired ] = useState(false);

    const [ formErrors, setFormErrors ] = useState({});

    const errors = {}

    const validateErrors = () => {
        if (!formData?.tourOptions || formData?.tourOptions.length === 0) {
            errors.tourOptions = "Please select at least one tour option";
        }
        if (!formData?.hotelOptions || formData?.hotelOptions.length === 0) {
            errors.hotelOptions = "Please select at least one hotel option";
        }
        if (!formData?.visaType || formData.visaType.trim().length === 0) {
            errors.visaType = "Please select visa type";
        }
        // if (!formData?.visaNo || formData.visaNo.trim().length === 0) {
        //     errors.visaNo = "Please select visa number";
        // }
        if (!formData?.flightRequired || formData.flightRequired.trim().length === 0) {
            errors.flightRequired = "Please select if the flight is required or not";
        }
        if (formData.flightRequired === "Yes") {
            if (!formData?.journeyDate || formData.journeyDate.trim().length === 0) {
                errors.journeyDate = "Please select journey date";
            }
            if (!formData?.returnDate || formData.returnDate.trim().length === 0) {
                errors.returnDate = "Please select return date";
            }
        }
        if (!formData?.airportPickup || formData.airportPickup.trim().length === 0) {
            errors.airportPickup = "Please select if Airport pickup is required";
        }
        if (!formData?.airportDropOff || formData.airportDropOff.trim().length === 0) {
            errors.airportDropOff = "Please select if Airport drop-off is required";
        }
        if (!formData?.fullName || formData.fullName.trim().length === 0) {
            errors.fullName = "Please enter Full Name";
        }
        if (!formData?.email || formData.email.trim().length === 0) {
            errors.email = "Please enter email";
        }
        if (!formData?.phoneNo || formData.phoneNo.trim().length === 0) {
            errors.phoneNo = "Please enter phone number";
        }
        if (!formData?.noOfAdult || formData.noOfAdult.trim().length === 0) {
            errors.noOfAdult = "Please enter number of adults";
        }
        // if (!formData?.noOfChild || formData.noOfChild.trim().length === 0) {
        //     errors.noOfChild = "Please enter number of children";
        // }
        // if (!formData?.noOfInfant || formData.noOfInfant.trim().length === 0) {
        //     errors.noOfInfant = "Please enter number of infants";
        // }
    }
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendContactFormEmail = async (formData) => {
        // Check for empty or undefined fields and provide default values where necessary
        const templateParams = {
            email: "booking@samluxurytours.com",
            customerName: formData.fullName || "No Name Provided",
            customerPhoneNo: formData.phoneNo || "No Phone Provided",
            customerEmail: formData.email || "No Email Provided",
            visaType: formData.visaType || "Nill",
            visaNo: formData.visaNo || "Nill",
            travelInsurance: formData.travelInsurance || "Nill",
            tourOptions: selectedTours && selectedTours.length > 0 
                ? selectedTours.map((tour) => ({
                    name: tour || "No Tour Selected"
                })) 
                : ["No Tours Selected"],
            hotelOptions: selectedHotels && selectedHotels.length > 0 
                ? selectedHotels.map((hotel) => ({
                    name: hotel || "No Hotel Selected"
                })) 
                : ["No Hotels Selected"],
            flightRequired: formData.flightRequired ? "Yes" : "No",
            journeyDate: formData.journeyDate || "No Date Provided",
            returnDate: formData.returnDate || "No Date Provided",
            airportPickup: formData.airportPickup ? "Yes" : "No",
            airportDropOff: formData.airportDropOff ? "Yes" : "No",
            noOfAdult: formData.noOfAdult || 0,
            noOfChild: formData.noOfChild || 0,
            noOfInfant: formData.noOfInfant || 0,
            remarks: formData.remarks || "Nill"
        };
    
        try {
            const response = await emailjs.send(
                SERVICE_ID, // Replace with your EmailJS Service ID
                TEMPLATE_ID, // Replace with your EmailJS Template ID
                templateParams,
                PUBLIC_KEY // Replace with your EmailJS Public Key
            );
    
            console.log("Email sent successfully!", response);
        } catch (error) {
            console.error("Email sending error:", error);
        }
    };

    // InBound Destination Form Template Design

    // A new InBound Destination Inquiry from {{customerName}} has been received. Kindly respond at your earliest convenience.

    // INBOUND DESTINATION FORM INQUIRY
    
    // Personal Information:
    
    
    // Name: {{customerName}}
    // Email: {{customerEmail}}
    // Phone No: {{customerPhoneNo}}
    
    // Travel Information:
    
    // Visa Type: {{visaType}}
    // Visa No: {{visaNo}}
    // Travel Insurance: {{travelInsurance}}
    
    
    
    // Flight Required: {{flightRequired}}
    // Journey Date: {{journeyDate}}
    // Return Date: {{returnDate}}
    // Airport Pickup: {{airportPickup}}
    // Airport Drop-Off: {{airportDropOff}}
    
    // Tour Information:
    
    
    // Tour Options:
    // {{#tourOptions}}
    // {{name}}
    // {{/tourOptions}}
     
    // Hotel Options:
    // {{#hotelOptions}}
    // {{name}}
    // {{/hotelOptions}}
    
    // Number of Adults: {{noOfAdult}}
    // Number of Children: {{noOfChild}}
    // Number of Infants: {{noOfInfant}}
    
    
    // Remarks:
    
    // {{remarks}}

    const handleSelectHotelCategory = (e) => {
        setSelectedHotelCategory(e.target.value);
        setSelectedHotels([])
    }

    const handleSelectTours = (e) => {
        const selectedTourId = e.target.value;
    
        // Find the selected tour name by matching the id
        const selectedTour = selectedCity === "Dubai"
            ? dubaiTourActivities.find(tour => tour.id === parseInt(selectedTourId))
            : abudhabiTourActivities.find(tour => tour.id === parseInt(selectedTourId));
    
        if (selectedTour && !selectedTours.includes(selectedTour.name)) {
            // Add the new tour to the state array
            setSelectedTours([...selectedTours, selectedTour.name]);
        }

        e.target.value = ""
    }

    const handleSelectHotel = (e) => {
        const selectedHotelName = e.target.value;
    
        // Prevent adding duplicates
        if (selectedHotelName && !selectedHotels.includes(selectedHotelName)) {
            setSelectedHotels([...selectedHotels, selectedHotelName]);
        }

        e.target.value = ""
    };

    // Remove Hotel
    const handleRemoveHotel = (hotel) => {
        setSelectedHotels(selectedHotels.filter(item => item !== hotel));
    };

    // Remove Tour
    const handleRemoveTour = (tour) => {
        setSelectedTours(selectedTours.filter(item => item !== tour));
    };

    const handleClearForm = () => {
        setFormData({
            tourOptions: [],
            hotelOptions: [],
            visaType: "",
            visaNo: "",
            travelInsurance: "",
            flightRequired: "",
            journeyDate: "",
            returnDate: "",
            airportPickup: "",
            airportDropOff: "",
            fullName: "",
            email: "",
            phoneNo: "",
            noOfAdult: 0,
            noOfChild: 0,
            noOfInfant: 0,
            remarks: "",
        });
        setSelectedTours([])
        setSelectedHotels([])
        setSelectedHotelCategory("")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        formData.tourOptions = selectedTours;
        formData.hotelOptions = selectedHotels;
        validateErrors()
        console.log(formData);
        if(Object.keys(errors).length === 0) {
            console.log("Email sent successfully!");
            sendContactFormEmail(formData)
            alert("Form Submitted Successfully!")
            setFormData({
                tourOptions: [],
                hotelOptions: [],
                visaType: "",
                visaNo: "",
                travelInsurance: "",
                flightRequired: "",
                journeyDate: "",
                returnDate: "",
                airportPickup: "",
                airportDropOff: "",
                fullName: "",
                email: "",
                phoneNo: "",
                noOfAdult: 0,
                noOfChild: 0,
                noOfInfant: 0,
                remarks: "",
            })
            setSelectedTours([])
            setSelectedHotels([])
            setSelectedHotelCategory("")
        } else {
            alert("Please fill in all the required fields.");
            setFormErrors(errors)
            console.log(formErrors)
        }
    }
    
    return (
        <section id="contact-form">
            <div className="inbound-contact-form container">
                <div className="heading-section">
                    <div className="title">
                        <h3>Custom Itinerary form</h3>
                    </div>
                    <div className="sub-title">
                        <h1>Plan your Trip With SAM Luxury Tourism</h1>
                        {/* <p>Have questions or need assistance? Reach out to us for seamless travel planning and unforgettable experiences!</p> */}
                    </div>
                </div>
                <div className="tour-details-div">
                    <div className="details">
                        <RiFlightTakeoffFill />
                        <span>fligths</span>
                    </div>
                    <div className="details">
                        <FaHotel />
                        <span>Hotels</span>
                    </div>
                    <div className="details">
                        <FaUmbrellaBeach />
                        <span>Sightseeing</span>
                    </div>
                    <div className="details">
                        <IoTicket />
                        <span>Entry Tickets</span>
                    </div>
                    <div className="details">
                        <IoCarSport />
                        <span>Transfers</span>
                    </div>
                    <div className="details">
                        <IoFastFood />
                        <span>Meals</span>
                    </div>
                    <div className="details">
                        <FaPersonSkiing />
                        <span>Activities</span>
                    </div>
                    
                </div>
                <form className="form-container" onSubmit={handleSubmit}>
                    <div className="form-head">
                        <h1>{selectedCity} Tour </h1>
                        <div className="change-btn" onClick={() => {
                            selectedCity === "Dubai" ? setSelectedCity("Abudhabi") : setSelectedCity("Dubai")
                            handleClearForm()
                        }}>Change</div>
                    </div>
                    <label htmlFor="">Tour Information</label>
                    <div className="sameline tour-hotel">
                        <label className="tours" htmlFor="tours">Tour</label>
                        <label className="hotels hide" htmlFor="hotels">Hotels</label>
                    </div>
                    <div className="sameline tour-hotel">
                        <div className="same-column">
                            {selectedTours.length >= 1 && (
                                <div className="selected-activities">
                                    {selectedTours.map((ele, index) => (
                                        <div key={index} className="activities">
                                            {ele}
                                            <IoClose onClick={() => handleRemoveTour(ele)}/>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {/* Tour Selection */}
                            <div className="form-group">
                                <select name="tourOptions" onChange={handleSelectTours}>
                                    <option value="">Select Tour Option</option>
                                    {selectedCity === "Dubai" ? (
                                        dubaiTourActivities.map((ele) => (
                                            <option key={ele.id} value={ele.id}>{ele.name}</option>
                                        ))
                                    ) : (
                                        abudhabiTourActivities.map((ele) => (
                                            <option key={ele.id} value={ele.id}>{ele.name}</option>
                                        ))
                                    )}
                                </select>
                                {/* <IoIosArrowDown className="icon" /> */}
                            </div>
                        </div>
                        <div className="same-column">
                            {selectedHotelCategory && (
                                <div className="selected-activities">
                                    <div className="activities-head">
                                        {selectedHotelCategory === "threeStarHotels" && "3 Star Hotels :"}
                                        {selectedHotelCategory === "fourStarHotels" && "4 Star Hotels :"}
                                        {selectedHotelCategory === "fiveStarHotels" && "5 Star Hotels :"}
                                        {/* <IoClose /> */}
                                    </div>
                                </div>
                            )}
                            {selectedHotels.length >= 1 && (
                                <div className="selected-activities">
                                    {selectedHotels.map((ele, index) => (
                                        <div key={index} className="activities">
                                            {ele}
                                            <IoClose onClick={() => handleRemoveHotel(ele)}/>
                                        </div>
                                    ))}
                                </div>
                            )}
                            <label className="hotels show" htmlFor="hotels">Hotels</label>
                            <div className="form-group">
                                <select type="text" name="hotelOptions" placeholder="Hotels" onChange={handleSelectHotelCategory} >
                                    <option value="">Select Hotel Category</option>
                                        <option value="threeStarHotels">3 Star Hotels</option>
                                        <option value="fourStarHotels">4 Star Hotels</option>
                                        <option value="fiveStarHotels">5 Star Hotels</option>
                                </select>
                                {/* <IoIosArrowDown className="icon" /> */}
                            </div>
                            {selectedHotelCategory && (
                                <div className="form-group">
                                    <select name="tourOptions" onChange={handleSelectHotel}>
                                        <option value="">Select Hotels</option>
                                        {
                                            (selectedHotelCategory === "threeStarHotels" ? threeStarHotels :
                                            selectedHotelCategory === "fourStarHotels" ? fourStartHotels :
                                            selectedHotelCategory === "fiveStarHotels" ? fiveStarHotels : []
                                            ).map((ele) => (
                                                <option key={ele.id} value={ele.name}>
                                                    {ele.name} - {ele.city}
                                                </option>
                                            ))
                                        }
                                    </select>
                                    {/* <IoIosArrowDown className="icon" /> */}
                                </div>
                            )}
                        </div>
                    </div>
                    {(formErrors.tourOptions || formErrors.hotelOptions) && (
                        <div className="sameline">
                            {formErrors.tourOptions && <p className="error">{formErrors.tourOptions}</p>}
                            {formErrors.hotelOptions && <p className="error">{formErrors.hotelOptions}</p>}
                        </div>
                    )}

                    <label htmlFor="">Travel Information</label>
                    <div className="sameline">
                        <div className="form-group">
                            <select type="text" id="visaType" name="visaType" placeholder="Visa Type" value={formData.visaType} onChange={handleChange} >
                                <option value="">Visa Type</option>
                                    <option value="Leisure">Business</option>
                                    <option value="Business">Tourist</option>
                                    <option value="Other">Other</option>/
                            </select>
                            {/* <IoIosArrowDown className="icon" /> */}
                        </div>
                        <div className="form-group">
                            <input type="number" id="visaNo" name="visaNo" placeholder="Visa No" value={formData.visaNo} onChange={handleChange} />
                            {/* <FaUser className="icon" /> */}
                        </div>
                    </div>
                    {(formErrors.visaType) && (
                        <div className="sameline">
                            {formErrors.visaType && <p className="error">{formErrors.visaType}</p>}
                            {/* {formErrors.visaNo && <p className="error">{formErrors.visaNo}</p>} */}
                        </div>
                    )}
                    <div className="form-group">
                        <input type="text" id="travelInsurance" name="travelInsurance" placeholder="Travel Insurance Details(If Required)" value={formData.travelInsurance} onChange={handleChange} />
                        {/* <FaUser className="icon" /> */}
                    </div>
                    
                    <div className="sameline flight mobile">
                        <label htmlFor="">Flight</label>
                        <div className="sameline mobile">
                            <div className="sameline checkbox">
                                <label htmlFor="">Yes</label>
                                <input 
                                    type="checkbox" 
                                    name="flightRequired" 
                                    id="flightRequiredYes" 
                                    value="Yes" 
                                    checked={formData.flightRequired === "Yes"} 
                                    onChange={() => {
                                        setFlightRequired("Yes")
                                        setFormData({ ...formData, flightRequired: "Yes" })
                                    }} 
                                />
                            </div>
                            <div className="sameline checkbox">
                                <label htmlFor="">No</label>
                                <input 
                                    type="checkbox" 
                                    name="flightRequired" 
                                    id="flightRequiredNo" 
                                    value="No" 
                                    checked={formData.flightRequired === "No"}  
                                    onChange={() => {
                                        setFlightRequired("No")
                                        setFormData({ ...formData, flightRequired: "No" })
                                    }} 
                                />
                            </div>
                        </div>
                    </div>
                    {errors.flightRequired && <p className="error">{errors.flightRequired}</p>}
                    {flightRequired === "Yes" && (
                        <>
                        <div className="sameline">
                            <div className="sameline mobile same-row">
                                <label htmlFor="">Journey Date</label>
                                <div className="form-group">
                                    <input 
                                        type="date" 
                                        name="journeyDate" 
                                        id="journeyDate" 
                                        placeholder="Journey Date" 
                                        value={formData.journeyDate} 
                                        onChange={handleChange} 
                                    />
                                    {/* <MdDateRange className="icon" /> */}
                                </div>
                            </div>
                            <div className="sameline mobile same-row">
                                <label htmlFor="">Return Date</label>
                                <div className="form-group">
                                    <input 
                                        type="date" 
                                        name="returnDate" 
                                        id="returnDate" 
                                        placeholder="Return Date" 
                                        value={formData.returnDate} 
                                        onChange={handleChange} 
                                    />
                                    {/* <MdDateRange className="icon" /> */}
                                </div>
                            </div>
                        </div>
                        {(formErrors.journeyDate || formErrors.returnDate) && (
                            <div className="sameline">
                                {formErrors.journeyDate && <p className="error">{formErrors.journeyDate}</p>}
                                {formErrors.returnDate && <p className="error">{formErrors.returnDate}</p>}
                            </div>
                        )}
                        </>
                    )}
                    <label htmlFor="">Airport Pick Up and Drop Off</label>
                    <div className="sameline">
                        <div className="sameline mobile">
                            <label htmlFor="">Pick Up</label>
                            <div className="sameline mobile">
                                <div className="sameline checkbox">
                                    <label htmlFor="">Yes</label>
                                    <input 
                                        type="checkbox" 
                                        value="Yes" 
                                        name="airportPickup" 
                                        id="airportPickupYes" 
                                        checked={formData.airportPickup === "Yes"} 
                                        onChange={() => setFormData({ ...formData, airportPickup: "Yes" })}
                                    />
                                </div>
                                <div className="sameline checkbox">
                                    <label htmlFor="">No</label>
                                    <input 
                                        type="checkbox" 
                                        value="No" 
                                        name="airportPickup" 
                                        id="airportPickupNo" 
                                        checked={formData.airportPickup === "No"} 
                                        onChange={() => setFormData({ ...formData, airportPickup: "No" })}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="sameline mobile">
                            <label htmlFor="">Drop Off</label>
                            <div className="sameline mobile">
                                <div className="sameline checkbox">
                                    <label htmlFor="">Yes</label>
                                    <input 
                                        type="checkbox" 
                                        value="Yes" 
                                        name="airportDropOff" 
                                        id="airportDropOffYes" 
                                        checked={formData.airportDropOff === "Yes"} 
                                        onChange={() => setFormData({ ...formData, airportDropOff: "Yes" })}
                                    />
                                </div>
                                <div className="sameline checkbox">
                                    <label htmlFor="">No</label>
                                    <input 
                                        type="checkbox" 
                                        value="No" 
                                        name="airportDropOff" 
                                        id="airportDropOffNo" 
                                        checked={formData.airportDropOff === "No"} 
                                        onChange={() => setFormData({ ...formData, airportDropOff: "No" })}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {(formErrors.airportPickup || formErrors.airportDropOff) && (
                        <div className="sameline">
                            {formErrors.airportPickup && <p className="error">{formErrors.airportPickup}</p>}
                            {formErrors.airportDropOff && <p className="error">{formErrors.airportDropOff}</p>}
                        </div>
                    )}

                    <label htmlFor="">Personal Information</label>
                    <div className="sameline">
                        <div className="form-group">
                            <input type="text" name="fullName" id="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
                            <FaUser className="icon" />
                        </div>
                    </div>
                    {formErrors.fullName && 
                        <div className="error">{formErrors.fullName}</div>
                    }
                    <div className="sameline">
                        <div className="form-group">
                            <input type="text" name="phoneNo" id="phoneNo" placeholder="Phone Number" value={formData.phoneNo} onChange={handleChange} />
                            <FaPhoneAlt className="icon" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="email" id="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                            <IoMdMail className="icon" />
                        </div>
                    </div>
                    {(formErrors.phoneNo || formErrors.email) && (
                        <div className="sameline">
                            {formErrors.phoneNo && <div className="error">{formErrors.phoneNo}</div>}
                            {formErrors.email && <div className="error">{formErrors.email}</div>}
                        </div>
                    )}
                    <div className="sameline mobile">
                        <div className="sameline">
                            <label htmlFor="">Adult</label>
                            <div className="form-group">
                                <select name="noOfAdult" id="noOfAdult" value={formData.noOfAdult} onChange={handleChange}>
                                    {[...Array(50).keys()].map(num => (
                                        <option key={num} value={num}>{num}</option>
                                    ))}
                                </select>
                                {/* <IoIosArrowDown className="icon" /> */}
                            </div>
                        </div>
                        <div className="sameline">
                            <label htmlFor="">Child</label>
                            <div className="form-group">
                                <select name="noOfChild" id="noOfChild" value={formData.noOfChild} onChange={handleChange}>
                                    {[...Array(50).keys()].map(num => (
                                        <option key={num} value={num}>{num}</option>
                                    ))}
                                </select>
                                {/* <IoIosArrowDown className="icon" /> */}
                            </div>
                        </div>
                        <div className="sameline">
                            <label htmlFor="">Infant</label>
                            <div className="form-group">
                                <select name="noOfInfant" id="noOfInfant" value={formData.noOfInfant} onChange={handleChange}>
                                    {[...Array(50).keys()].map(num => (
                                        <option key={num} value={num}>{num}</option>
                                    ))}
                                </select>
                                {/* <IoIosArrowDown className="icon" /> */}
                            </div>
                        </div>
                    </div>
                    {(formErrors.noOfAdult) && (
                            <div className="sameline">
                                {formErrors.noOfAdult && <p className="error">{formErrors.noOfAdult}</p>}
                                {/* {formErrors.noOfChild && <p className="error">{formErrors.noOfChild}</p>}
                                {formErrors.noOfInfant && <p className="error">{formErrors.noOfInfant}</p>} */}
                            </div>
                        )}
                    <div className="form-group">
                        <textarea className="textarea" name="remarks" id="remarks" placeholder="Remarks" value={formData.remarks} onChange={handleChange}></textarea>
                    </div>
                    <div className="button-div">
                        <button className="btn" type="submit">
                            <div className="icon-div">
                                <FaPaperPlane />
                            </div>
                            <span className="text">
                                Send Inquiry
                            </span>
                            <span className="loading-animate"></span>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}