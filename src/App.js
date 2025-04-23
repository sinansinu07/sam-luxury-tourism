import './App.css';
import { Fragment, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Headers from './Components/Common/Header/Header';
import Footer from './Components/Common/Footer/Footer';
import HomePage from './Pages/HomePage';
import AboutUsPage from './Pages/AboutUsPage';
import ContactUsPage from './Pages/ContactUsPage';
import DubaiTourPage from './Pages/DubaiTourPage';
import AbudhabiTourPage from './Pages/AbudhabiTourPage';
import OutBoundDestinationPage from './Pages/OutBoundDestinationPage';
import InBoundDestinationPage from './Pages/InBoundDestinationPage';
import DubaiTourDetailPage from './Components/Common/TourDetailPage/DubaiTourDetailPage';
import AbudhabiTourDetailPage from './Components/Common/TourDetailPage/AbudhabiTourDetailPage';
import CartPage from './Components/Common/CartPage/CartPage';
import { startAddToCart, startEmptyCart, startGetCart } from './Action/cartAction';
import { useDispatch, useSelector } from 'react-redux';
import WhatsAppChatWidget from './Components/Common/WhatsAppChatWidget/WhatsAppChatWidget';
import PageNotFound from './Components/Common/PageNotFound/PageNotFound';
import { startGetCustomer } from './Action/customerAction';
import { sendOrderEmail } from './Services/emailService';
import { generateInvoicePDF } from './Services/generateInvoicePDF';
import 'react-datepicker/dist/react-datepicker.css';

// New Commit

function App() {
  const dispatch = useDispatch()

  const customerDetails = useSelector((state) => state.customer.data); // Assuming Redux state
  const cart = useSelector((state) => state.cart.data.lineItems);
  const totalAmount = useSelector((state) => state.cart.data.totalAmount);
  const orderId = `order-${Date.now()}`;

  console.log(customerDetails)
  console.log(cart)
  console.log(totalAmount)
  console.log(orderId)

  useEffect(() => {
    dispatch(startGetCart())
    dispatch(startGetCustomer())
  }, [dispatch])

  const navigate = useNavigate();

  useEffect(() => {
    const paymentStatus = sessionStorage.getItem('paymentStatus');

    if (paymentStatus === 'success') {
      // Handle the successful payment
      sendOrderEmail(customerDetails, cart, cart.totalAmount, `order-${Date.now()}`)
        .then(() => console.log("Email sent!"))
        .catch((error) => console.error("Email sending error:", error));
      const confirmatiion = window.confirm("Do you want to download the Order Invoice")
      if(confirmatiion) {
        generateInvoicePDF(customerDetails, cart)
      }
      localStorage.removeItem('cart');  // Remove cart from localStorage
      dispatch(startEmptyCart())  // Update cart in Redux
      sessionStorage.removeItem('paymentStatus');
      alert('Payment Successful!');
    } else if (paymentStatus === 'failure') {
      alert('Payment Failed or Cancelled!');
      sessionStorage.removeItem('paymentStatus');
    }
  }, []);

  // This script runs on your homepage or wherever the payment is completed
window.onload = () => {
  const params = new URLSearchParams(window.location.search);
  const paymentStatus = params.get('paymentStatus'); // Get paymentStatus from the URL query parameters

  if (paymentStatus) {
    // Save payment status in sessionStorage temporarily
    sessionStorage.setItem('paymentStatus', paymentStatus);

    // Optionally, redirect to the homepage (if not already there)
    window.location.href = '/';
  }
};


  return (
    <Fragment>
      <Headers/>
      <Routes>
          {/* English Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/tour-dubai" element={<DubaiTourPage />} />
          <Route path="/tour-abudhabi" element={<AbudhabiTourPage />} />
          <Route path="/destination-inbound" element={<InBoundDestinationPage />} />
          <Route path="/destination-outbound" element={<OutBoundDestinationPage />} />
          <Route path="/tour-dubai/:activityName" element={<DubaiTourDetailPage />} />
          <Route path="/tour-abudhabi/:activityName" element={<AbudhabiTourDetailPage />} />
          <Route path="/cart" element={<CartPage />} />

          {/* Arabic Routes - Prefix with /ar */}
          <Route path="/ar" element={<HomePage isArabic />} />
          <Route path="/ar/about-us" element={<AboutUsPage isArabic />} />
          <Route path="/ar/contact-us" element={<ContactUsPage isArabic />} />
          <Route path="/ar/tour-dubai" element={<DubaiTourPage isArabic />} />
          <Route path="/ar/tour-abudhabi" element={<AbudhabiTourPage isArabic />} />
          <Route path="/ar/destination-inbound" element={<InBoundDestinationPage isArabic />} />
          <Route path="/ar/destination-outbound" element={<OutBoundDestinationPage isArabic />} />
          <Route path="/ar/tour-dubai/:activityName" element={<DubaiTourDetailPage isArabic />} />
          <Route path="/ar/tour-abudhabi/:activityName" element={<AbudhabiTourDetailPage isArabic />} />
          <Route path="/ar/cart" element={<CartPage isArabic />} />
          
          {/* Catch-all for undefined English routes */}
          <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <WhatsAppChatWidget/>
      <Footer/>
    </Fragment>
  );
}

export default App;
