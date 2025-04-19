import "./CartPage.scss"

import { FaCartArrowDown, FaUser } from "react-icons/fa";
import { HiPrinter } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { RiSecurePaymentFill, RiUser3Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { startRemoveLineItem } from "../../../Action/cartAction";
import PaymobPayment from "../PaymentGateway/PaymobPayment";
import { useState } from "react";
import PhoneInput from "react-phone-input-2"
import 'react-phone-input-2/lib/style.css'
import { generateInvoicePDF } from "../../../Services/generateInvoicePDF";
import { useAuth } from "../../../Context/AuthContext";

export default function CartPage() {
    const dispatch = useDispatch()
    const { currencyValue, selectedCurrencySymbol } = useAuth()
    const cart = useSelector(state => {
        return state.cart.data
    })

    console.log(cart)

    const [ customerDetails, setCustomerDetails ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        nationality: "",
        specialRequest: "",
        remarks: ""
    })

    const [ formErrors, setFormErrors ] = useState({})
    const [ clickPayNow, setClickPayNow ] = useState(false)
    const [ isPaymentMethodChecked, setIsPaymentMethodChecked ] = useState(false);
    const [ isPolicyChecked, setIsPolicyChecked ] = useState(false);
    const [paymentError, setPaymentError] = useState(false);

    const errors = {}

    const validateErrors = () => {
        if(customerDetails.firstName.trim().length === 0) {
            errors.firstName = "First name is required"
        }
        if(customerDetails.lastName.trim().length === 0) {
            errors.lastName = "Last name is required"
        }
        if(customerDetails.email.trim().length === 0) {
            errors.email = "Email is required"
        }
        if(customerDetails.phone.trim().length === 0) {
            errors.phone = "Phone is required"
        }
        if(customerDetails.nationality.trim().length === 0) {
            errors.nationality = "Nationality is required"
        }
        if(!isPaymentMethodChecked) {
            errors.paymentMethod = "Payment method to be checked"
        }
        if(!isPolicyChecked) {
            errors.policyChecked = "Policy Reminder to be checked"
        }
    }

    console.log(customerDetails)

    const handleChange = (e) => {
        const { name, value } = e.target
        setCustomerDetails({ ...customerDetails, [name]: value })
    }

    const handlePhoneChange = (value) => {
        setCustomerDetails({ ...customerDetails, phone: value }); // Directly update the phone number in the form
        // console.log("Updated phone number:", value);
    };

    console.log(cart)

    const handleRemoveLineItem = (tourOption) => {
        const confirmation = window.confirm("Are you sure you want to remove this item from your cart?")
        if (confirmation) {
            dispatch(startRemoveLineItem(tourOption))
            const newCart = {}
            newCart.lineItems = cart?.lineItems?.filter(item => item.tourOption !== tourOption)
            newCart.totalAmount = newCart?.lineItems?.reduce((sum, item) => sum + item.amount, 0)
            console.log(newCart)
            localStorage.setItem("cart", JSON.stringify(newCart));
        }
    }

    const handleClickPayNow = () => {
        // const confirmatiion = window.confirm("DO you want to download the Order Invoice")
        // if(confirmatiion) {
        //     generateInvoicePDF(customerDetails, cart)
        // }
        validateErrors()
        if(Object.keys(errors).length === 0) {
            setClickPayNow(true)
            if(isPaymentMethodChecked && isPolicyChecked){
                console.log("Pay Now")
                setClickPayNow(true)
                setFormErrors({})
                localStorage.setItem("customerDetails", JSON.stringify(customerDetails));
            } else {
                alert("Please check the payment method and policy")
                setClickPayNow(false)
                setFormErrors({})
            }
        } else {
            setFormErrors(errors)
            console.log(formErrors)
            alert("Please fill in all the required fields")
            setClickPayNow(false)
        }
    }

    console.log("there is an errors", paymentError)

    return (
        <section>
            <div className="cart-details-page">
                <h1>Passanger Cart</h1>
                <div className="payment-step-div">
                    <div className="left">
                        <div className="step-div">
                            <span>1</span>
                            <FaCartArrowDown/>
                            <p>Add to Cart</p>
                        </div>
                        <hr className="hr"/>
                        <div className="step-div">
                            <span>2</span>
                            <RiSecurePaymentFill />
                            <p>Payment</p>
                        </div>
                        <hr className="hr"/>
                        <div className="step-div">
                            <span>3</span>
                            <HiPrinter />
                            <p>Print Voucher</p>
                        </div>
                    </div>
                    <div className="right">
                        <h1>You currently have {cart?.lineItems?.length} item in your cart</h1>
                        <h2><a href="/">Keep Shopping</a></h2>
                    </div>
                </div>
                <div className="cart-payment-div">
                    <div className="cart-details-div">
                        {cart?.lineItems?.length > 0 ? (
                            cart?.lineItems?.map((lineItem) => {
                                return (
                                    <div className="cart-details" key={lineItem.tourOption}>
                                        <IoClose className="remove-item" onClick={() => {handleRemoveLineItem(lineItem.tourOption)}}/>
                                        <h1>{lineItem?.name}</h1>
                                        <hr className="hr"/>
                                        <div className="tour-details">
                                            <div className="name-value">
                                                <p>Tour Option</p>
                                                <p className="value">{lineItem?.tourOption}</p>
                                            </div>
                                            <div className="name-value">
                                                <p>Date</p>
                                                <p className="value">{lineItem?.date}</p>
                                            </div>
                                            <div className="name-value">
                                                <p>Transfer Type</p>
                                                <p className="value">{lineItem?.transferOption?.name}</p>
                                            </div>
                                            {/* <div className="name-value">
                                                <p>Transfer Timings</p>
                                                <p>value</p>
                                            </div> */}
                                            <div className="name-value">
                                                <p>Pax</p>
                                                <p className="value">{ lineItem?.adult !== 0 &&  `${lineItem?.adult} Adults` } { lineItem?.child !== 0 && `, ${lineItem?.child} Children` }</p>
                                            </div>
                                            <div className="name-value red">
                                                <p>Last date of cancel:</p>
                                                <p className="value">Non Refundable</p>
                                            </div>
                                            <div className="name-value">
                                                <p>Availability</p>
                                                <p className="value">Available</p>
                                            </div>
                                            <div className="name-value">
                                                <p>Amount Incl. VAT</p>
                                                <p className="value">{selectedCurrencySymbol} {(lineItem?.amount * currencyValue).toFixed(2)}</p>
                                            </div>
                                        </div>
                                        <hr className="hr"/>
                                        <div className="coupon-div">
                                            <p>Enter Coupon Code</p>
                                            <div className="coupon">
                                                <div className="form-group">
                                                    <input type="text" name="checkIn" placeholder="Enter Coupon Code"/>
                                                </div>
                                                <div className="apply-btn">Apply</div>
                                            </div>
                                        </div>
                                        <hr className="hr"/>
                                        <div className="total-div">
                                            <p className="total">Sub Total</p>
                                            <p className="total-amount">{selectedCurrencySymbol} {(lineItem?.amount * currencyValue).toFixed(2)}</p>
                                        </div>
                                    </div>
                                )
                            })
                        ) : (
                            <div className="cart-details empty">
                                <p>Cart is empty</p>
                                <p>Go to <a href="/tour-dubai">Tour</a> to add a new Tour Activity</p>
                            </div>
                        )}
                    </div>
                    <div className="payment-details-div">
                        <div className="cart-total-amount">
                            <h1>Final Amount</h1>
                            <hr className="hr"/>
                            <div className="amount-div">
                                <p className="amount">Total Amount Incl. VAT</p>
                                <p className="amount">{selectedCurrencySymbol} {(cart?.totalAmount *currencyValue).toFixed(2)}</p>
                            </div>
                            <div className="amount-bg-div">
                                <p className="amount">Final Amount</p>
                                <p className="amount">{selectedCurrencySymbol} {(cart?.totalAmount *currencyValue).toFixed(2)}</p>
                            </div>
                        </div>
                        <div className="payment-form-div">
                            <h1>Passenger Details</h1>
                            <form className="payment-form">
                                <div className="sameline">
                                    <div className="sameline mobile">
                                        <div className="form-group title">
                                            <select>
                                                <option value="Mr">Mr</option>
                                                <option value="Mrs">Mrs</option>
                                                <option value="Ms">Ms</option>
                                            </select>
                                            {/* <IoIosArrowDown className="icon"/> */}
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="firstName" id="firstName*" value={customerDetails.firstName} onChange={handleChange} placeholder="First Name"/>
                                            <RiUser3Fill className="icon" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="lastName" id="lastName*" value={customerDetails.lastName} onChange={handleChange} placeholder="Last Name"/>
                                        <RiUser3Fill className="icon" />
                                    </div>
                                </div>
                                {(formErrors.firstName || formErrors.lastName) &&
                                    (<div className="sameline">
                                        {formErrors.firstName && <p className="error">{formErrors.firstName}</p>}
                                        {formErrors.lastName && <p className="error lastname">{formErrors.lastName}</p>}
                                    </div>
                                )}
                                <div className="sameline">
                                    <div className="form-group">
                                        <input type="text" name="nationality" id="nationality*" value={customerDetails.nationality} onChange={handleChange} placeholder="Nationality"/>
                                        <IoIosArrowDown className="icon" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="email" id="email*" value={customerDetails.email} onChange={handleChange} placeholder="Email" />
                                        <MdEmail className="icon" />
                                    </div>
                                    {/* <div className="form-group"> */}
                                        {/* <label className="form-label" htmlFor="phoneNo">Phone Number</label> */}
                                        <div style={{ 
                                            position: 'relative', 
                                            display: 'flex', 
                                            flexDirection: 'row', 
                                            alignItems: 'center', 
                                            background: '#fafafa', 
                                            padding: '7px', 
                                            borderRadius: '10px', 
                                            border: '1px solid #e4e4e4', 
                                            color: 'gray', 
                                            width: '100%', 
                                            height: '100%' 
                                        }}>
                                            <PhoneInput
                                                inputStyle={{ 
                                                    border: "none", 
                                                    outline: "none", 
                                                    background: "transparent", 
                                                    fontSize: "16px", 
                                                    paddingRight: "10px", 
                                                    width: "100%"
                                                }}
                                                containerStyle={{ 
                                                    display: "flex", 
                                                    alignItems: "center", 
                                                    width: "100%" 
                                                }}
                                                buttonStyle={{ 
                                                    border: "none", 
                                                    boxShadow: "none", 
                                                    background: "none" 
                                                }}
                                                className="form-control"
                                                placeholder="Enter Your Mobile"
                                                name="phoneNo"
                                                id="phoneNo"
                                                country={"ae"}
                                                value={customerDetails.phone}
                                                onChange={handlePhoneChange}
                                                required
                                            />
                                        </div>
                                    {/* </div> */}

                                </div>
                                { (formErrors.nationality || formErrors.email || formErrors.phone) && 
                                    (<div className="sameline">
                                        {formErrors.nationality && <p className="error">{formErrors.nationality}</p>}
                                        {formErrors.email && <p className="error">{formErrors.email}</p>}
                                        {formErrors.phone && <p className="error">{formErrors.phone}</p>}
                                    </div>
                                )}
                                <div className="form-group">
                                    <textarea type="number" name="specialRequest" value={customerDetails.specialRequest} onChange={handleChange} className="form-control" placeholder="Special Request" />
                                    {/* <FaUser className="icon" /> */}
                                </div>
                            </form>
                        </div>
                        <div className="payment-method-div">
                            <h1>Payment Method</h1>
                            <div className="payment-methods">
                                <div className="checkbox-div">
                                    <input 
                                        type="checkbox" 
                                        name="checkOut" 
                                        onChange={(e) => setIsPaymentMethodChecked(e.target.checked)}
                                    />
                                    <h3>Credit Card / Debit Card</h3>
                                </div>

                                <p><span>Note :</span> In the next step you will be redirected to your banks website to verify yourself.</p>
                            </div>
                            {formErrors.paymentMethod && <p className="checkbox-error">{formErrors.paymentMethod}</p>}
                        </div>
                        <div className="tour-remarks">
                            <h1>Additional Remarks</h1>
                            <form>
                                <div className="form-group">
                                    <textarea type="number" name="remarks" value={customerDetails.remarks} onChange={handleChange} placeholder="Remarks About the Tour"/>
                                    {/* <FaUser className="icon" /> */}
                                </div>
                            </form>
                        </div>
                        <div className="paynow-method-div">
                            <div className="paynow-div">
                                <div className="checkbox-div">
                                    <input 
                                        type="checkbox" 
                                        name="checkOut" 
                                        onChange={(e) => setIsPolicyChecked(e.target.checked)}
                                    />
                                    <p>
                                        By Clicking Pay Now, You agree that you have read and understood our<br/> 
                                        <span>Terms and Conditions</span> and <span>Privacy Policy</span>
                                    </p>
                                </div>
                                <div onClick={handleClickPayNow} className="paynow-btn">
                                        Pay Now
                                </div>
                                {/* <button onClick={() => generateInvoicePDF(customerDetails, cart)}>
                                    Download Invoice
                                </button> */}

                            </div>
                            {formErrors.policyChecked && <p className="checkbox-error">{formErrors.policyChecked}</p>}
                        </div>
                        {(isPolicyChecked && clickPayNow )&& (
                            <PaymobPayment 
                                clickPayNow={clickPayNow} 
                                cart={cart} 
                                customerDetails={customerDetails}
                                setPaymentError={setPaymentError}
                            />
                        )}
                        {paymentError && (
                            <div className="paynow-error-div">
                                <p>
                                There is an error with your payment. Please try again.<br/>
                                You can call Directly and book your Tour on the below number <br/>
                                </p>
                                <a href="tel:043412570"><p className="booknow-btn">
                                        Book Now
                                </p></a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}