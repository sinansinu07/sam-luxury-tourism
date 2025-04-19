import "./Header.scss"
import logo from "../../../Assets/Logo/Sam Logo 250X100.png"
import whatsappIcon from "../../../Assets/Common/whatsapp.png"
import paperPlane from  "../../../Assets/Common/paper-plane.webp"
import { FaCartArrowDown, FaFacebook, FaLanguage, FaLinkedin, FaPaperPlane, FaTimes, FaTwitter, FaUser, FaYoutube } from "react-icons/fa"
import { RiArrowDropDownFill, RiInstagramFill, RiMenu2Fill } from "react-icons/ri"
import { IoLogoWhatsapp, IoMdClose } from "react-icons/io"
import { BiSolidLogIn } from "react-icons/bi"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BsCurrencyExchange } from "react-icons/bs"
import { useLocation } from "react-router-dom"
import { useAuth } from "../../../Context/AuthContext"

export default function Headers() {
    const { selectedCurrencyName, setSelectedCurrencyName, setSelectedCurrencySymbol } = useAuth()
    const location = useLocation()
    const [isTourDropDownOpen, setIsTourDropDownOpen] = useState(false)
    const [isDestinationDropDownOpen, setIsDestinationDropDownOpen] = useState(false)
    const [isCurrencyHover, setIsCurrencyHover] = useState(false)
    const [isLanguageHover, setIsLanguageHover] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const [isRegister, setIsRegister] = useState(false);
    const [isLogin, setIsLogin] = useState(false);

    const [mobileMenu, setMobileMenu] = useState(false)

    const currencies = [
        {
            id: 1,
            name: "AED",
            symbol: "AED"
        },
        {
            id: 2,
            name: "USD",
            symbol: "$"
        },
        {
            id: 3,
            name: "EUR",
            symbol: "€"
        },
        {
            id: 4,
            name: "GBP",
            symbol: "£"
        }
    ]

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu)
    }

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
    });
    const [error, setError] = useState("");

    const [loginData, setLoginData] = useState({ emailOrPhone: "", password: "" });
    const [loginError, setLoginError] = useState("");

    const handleRegisterChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLoginChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        setError("");

        const { name, email, phone, password, confirmPassword } = formData;

        // Confirm password match
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        const user = {
            name,
            email,
            phone,
            password,
        };

        localStorage.setItem("user", JSON.stringify(user));
        alert("Registration successful!");

        // Clear form
        setFormData({
            name: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: ""
        });

        setShowModal(false)
    };

    const handleLogin = (e) => {
        e.preventDefault();
        setLoginError("");

        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {
            setLoginError("No user registered.");
            return;
        }

        if (
            (loginData.emailOrPhone === user.email || loginData.emailOrPhone === user.phone) &&
            loginData.password === user.password
        ) {
            alert("Login successful!");
            setShowModal(false)
            // You can set login state here if needed
        } else {
            setLoginError("Invalid email/phone or password.");
        }
    };

    return (
        <nav>
            <div className="navbar-top">
                <div 
                    className="language" 
                    onMouseEnter={() => {setIsLanguageHover(true)}}
                    onMouseLeave={() => {setIsLanguageHover(false)}} >
                    <FaLanguage />
                    <RiArrowDropDownFill className="arrow-down"/>
                    <AnimatePresence>
                        {isLanguageHover && (
                            <motion.div
                                className="language-dropdown"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 20, opacity: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}>
                                <ul>
                                    <li className="active">EN</li>
                                    {/* <li>AR</li>
                                    <li>ES</li>
                                    <li>FR</li> */}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                {/* <div className="social-contact"> */}
                <div className="social-icon">
                    <p>Follow Us:</p>
                    <div className="social">
                        <a href="https://www.instagram.com/samluxurytourism?igsh=dHRwZmdseWF2MWsy&utm_source=ig_contact_invite/"><RiInstagramFill /></a>
                        <a href="https://www.facebook.com/samluxurytours/"><FaFacebook /></a>
                        <a href="https://youtube.com/@samtourism?si=eHlBWYodzHNetUO0/"><FaYoutube /></a>
                        {/* <a href="/"><FaTwitter /></a> */}
                        <a href="https://www.linkedin.com/company/sam-luxury-tourism-llc/"><FaLinkedin /></a>
                    </div>
                </div>
                {/* </div> */}
                <div className="login-register">
                    <div className="register" onClick={() => { setShowModal(true); setIsRegister(true); setIsLogin(false); }}>
                        <FaUser />Register
                    </div>
                    <div className="login" onClick={() => { setShowModal(true); setIsLogin(true); setIsRegister(false) }}>
                        <BiSolidLogIn />
                        Login
                    </div>
                </div>
                <div 
                    className="currency"
                    onMouseEnter={() => {setIsCurrencyHover(true)}}
                    onMouseLeave={() => {setIsCurrencyHover(false)}}>
                    <BsCurrencyExchange />
                    <RiArrowDropDownFill className="arrow-down"/>
                    <AnimatePresence>
                        {isCurrencyHover && (
                            <motion.div
                                className="currency-dropdown"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 20, opacity: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}>
                                <ul>
                                    {
                                        currencies.map((currency) => {
                                            return (
                                                <li className={selectedCurrencyName === currency.name ? "active" : ""} onClick={() => {
                                                    setSelectedCurrencyName(currency.name)
                                                    setSelectedCurrencySymbol(currency.symbol)
                                                    localStorage.setItem("currencyName", currency.name)
                                                    }}>{currency.name}</li>
                                            )
                                        })
                                    }
                                    {/* <li className={selectedCurrencyName === "AED" ? "active" : ""} onClick={() => {
                                        setSelectedCurrencyName("AED")
                                        localStorage.setItem("currencyName", "AED")
                                        }}>AED</li>
                                    <li className={selectedCurrencyName === "USD" ? "active" : ""} onClick={() => {
                                        setSelectedCurrencyName("USD")
                                        localStorage.setItem("currencyName", "USD")
                                        }}>USD</li>
                                    <li className={selectedCurrencyName === "EUR" ? "active" : ""} onClick={() => {
                                        setSelectedCurrencyName("EUR")
                                        localStorage.setItem("currencyName", "EUR")
                                        }}>EUR</li>
                                    <li className={selectedCurrencyName === "GBP" ? "active" : ""} onClick={() => {
                                        setSelectedCurrencyName("GBP")
                                        localStorage.setItem("currencyName", "GBP")
                                        }}>GBP</li> */}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
            <div className="navbar container">
                <div className="logo-div">
                    {!mobileMenu ? <RiMenu2Fill className={!mobileMenu ? "menu-icon-close" : "menu-icon"} onClick={toggleMenu}/> : <IoMdClose onClick={toggleMenu} className="close-menu"/>}
                    <a href="/"><img src={logo} alt="" className="logo"/></a>
                </div>
                <div className="nav-links">
                    <div className={`mobile-menu-header ${mobileMenu ? "" : "hide-mobile-menu-header"}`}>
                        <div 
                            className="language" 
                            onMouseEnter={() => {setIsLanguageHover(true)}}
                            onMouseLeave={() => {setIsLanguageHover(false)}} >
                            <FaLanguage />
                            <RiArrowDropDownFill className="arrow-down"/>
                            <AnimatePresence>
                                {isLanguageHover && (
                                    <motion.div
                                        className="language-dropdown"
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: 20, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}>
                                        <ul>
                                            <li className="active">EN</li>
                                            {/* <li>AR</li>
                                            <li>ES</li>
                                            <li>FR</li> */}
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        <div 
                            className="currency"
                            onMouseEnter={() => {setIsCurrencyHover(true)}}
                            onMouseLeave={() => {setIsCurrencyHover(false)}}>
                            <BsCurrencyExchange />
                            <RiArrowDropDownFill className="arrow-down"/>
                            <AnimatePresence>
                                {isCurrencyHover && (
                                    <motion.div
                                        className="currency-dropdown"
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: 20, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}>
                                        <ul>
                                            <li className={selectedCurrencyName === "AED" ? "active" : ""} onClick={() => {
                                                setSelectedCurrencyName("AED")
                                                localStorage.setItem("currencyName", "AED")
                                                }}>AED</li>
                                            <li className={selectedCurrencyName === "USD" ? "active" : ""} onClick={() => {
                                                setSelectedCurrencyName("USD")
                                                localStorage.setItem("currencyName", "USD")
                                                }}>USD</li>
                                            <li className={selectedCurrencyName === "EUR" ? "active" : ""} onClick={() => {
                                                setSelectedCurrencyName("EUR")
                                                localStorage.setItem("currencyName", "EUR")
                                                }}>EUR</li>
                                            <li className={selectedCurrencyName === "GBP" ? "active" : ""} onClick={() => {
                                                setSelectedCurrencyName("GBP")
                                                localStorage.setItem("currencyName", "GBP")
                                                }}>GBP</li>
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                    <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
                        <li><a href="/" className={location.pathname==="/" ? "active" : ""}>Home</a></li>
                        <li 
                        onMouseEnter={() => {setIsTourDropDownOpen(true)}}
                        onMouseLeave={() => {setIsTourDropDownOpen(false)}}
                        >Tour
                            <AnimatePresence>
                                {isTourDropDownOpen && (
                                    <motion.div 
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: 20, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="dropdown">
                                        <ul>
                                            <li><a href="/tour-dubai" className={location.pathname==="/tour-dubai" ? "active" : ""}>Dubai</a></li>
                                            <li><a href="/tour-abudhabi" className={location.pathname==="/tour-abudhabi" ? "active" : ""}>Abudhabi</a></li>
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </li>
                        <li
                            onMouseEnter={() => {setIsDestinationDropDownOpen(true)}}
                            onMouseLeave={() => {setIsDestinationDropDownOpen(false)}}
                            >Destination
                            <AnimatePresence>
                                {isDestinationDropDownOpen && (
                                    <motion.div 
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: 20, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className="dropdown destination">
                                        <ul>
                                            <li><a href="/destination-inbound" className={location.pathname==="/destination-inbound" ? "active" : ""}>Inbound</a></li>
                                            <li><a href="/destination-outbound" className={location.pathname==="/destination-outbound" ? "active" : ""}>OutBound</a></li>
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </li>
                        <li><a href="/about-us" className={location.pathname==="/about-us" ? "active" : ""}>About</a></li>
                        <li><a href="/contact-us" className={location.pathname==="/contact-us" ? "active" : ""}>Contact Us</a></li>
                    </ul>
                    <div className={`mobile-menu-footer ${mobileMenu ? "" : "hide-mobile-menu-footer"}`}>
                        <div className="social-icon">
                            <p>Follow Us:</p>
                            <div className="social">
                                <a href="https://www.instagram.com/samluxurytourism?igsh=dHRwZmdseWF2MWsy&utm_source=ig_contact_invite/"><RiInstagramFill /></a>
                                <a href="https://www.facebook.com/samluxurytours/"><FaFacebook /></a>
                                <a href="https://youtube.com/@samtourism?si=eHlBWYodzHNetUO0/"><FaYoutube /></a>
                                {/* <a href="/"><FaTwitter /></a> */}
                                <a href="https://www.linkedin.com/company/sam-luxury-tourism-llc/"><FaLinkedin /></a>
                            </div>
                        </div>
                        <div className="login-register">
                            <div className="register" onClick={() => { setShowModal(true); setIsRegister(true); setIsLogin(false); }}>
                                <FaUser />Register
                            </div>
                            <div className="login" onClick={() => { setShowModal(true); setIsLogin(true); setIsRegister(false) }}>
                                <BiSolidLogIn />
                                Login
                            </div>
                        </div>
                    </div>
                </div>
                <div className="button-div">
                    <a href="/cart"><FaCartArrowDown className="add-to-cart"/></a>
                    <a href="/contact-us"><button className="btn">
                        <div className="icon-div">
                            <FaPaperPlane />
                        </div>
                        <span className="text">
                            Book Now
                        </span>
                        <span className="loading-animate"></span>
                    </button></a>
                </div>
            </div>
            {/* <div className="whatsapp-div">
                <a href="https://dash.elfsight.com/widget/1ea1f378-0dea-4435-b390-363c3064b4da">
                    <img src={whatsappIcon} alt="" className="whatsapp-icon" />
                    <IoLogoWhatsapp className="whatsapp-icon" />
                </a>
            </div> */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="close-btn" onClick={() => setShowModal(false)}>
                        <FaTimes />
                        </button>
                        <h2>{isRegister ? "Register" : "Login"}</h2>
                        {isRegister && (
                            <>
                            <form onSubmit={handleRegister}>
                                <div className="form-group">
                                    <input name="name" type="text" placeholder="Name" value={formData.name} onChange={handleRegisterChange} required />
                                </div>
                                <div className="form-group">
                                    <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleRegisterChange} required />
                                </div>
                                <div className="form-group">
                                    <input name="phone" type="tel" placeholder="Phone Number" value={formData.phone} onChange={handleRegisterChange} required />
                                </div>
                                <div className="form-group">
                                    <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleRegisterChange} required />
                                </div>
                                <div className="form-group">
                                    <input name="confirmPassword" type="password" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleRegisterChange} required />
                                </div>

                                {error && <p style={{ color: "red" }}>{error}</p>}

                                <button type="submit" className="apply-btn">Register</button>
                            </form>
                            <p className="goto-links">Already Registered, <span onClick={() => {setIsRegister(false); setIsLogin(true)}}>Login</span></p>
                            </>
                        )}
                        {isLogin && (
                            <>
                                <form onSubmit={handleLogin}>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="emailOrPhone"
                                            placeholder="Email or Phone Number"
                                            value={loginData.emailOrPhone}
                                            onChange={handleLoginChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            value={loginData.password}
                                            onChange={handleLoginChange}
                                            required
                                        />
                                    </div>

                                    {loginError && <p style={{ color: "red" }}>{loginError}</p>}

                                    <button type="submit" className="apply-btn">Login</button>
                                </form>
                                <p className="goto-links">New User, <span onClick={() => {setIsRegister(true); setIsLogin(false)}}>Register</span></p>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    )
}