import React, { useEffect, useState } from 'react';
import PaymobService from '../../Common/PaymentGateway/paymobService';
import { useNavigate } from 'react-router-dom';

const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY

const PaymobPayment = ({ clickPayNow, cart, customerDetails, setPaymentError }) => {
  const [paymentUrl, setPaymentUrl] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (clickPayNow) {
      const initiatePayment = async () => {
        try {
          const authToken = await PaymobService.getAuthToken();
          const intention = await PaymobService.createIntention(authToken, cart.totalAmount, cart.lineItems, customerDetails);

          if (intention && intention.client_secret) {
            const checkoutUrl = `https://uae.paymob.com/unifiedcheckout/?publicKey=${PUBLIC_KEY}&clientSecret=${intention.client_secret}`;
            // console.log(checkoutUrl);
            window.open(checkoutUrl, "_blank"); // Opens in a new tab
          }          
        } catch (error) {
          console.error('Payment initiation failed:', error);
          setPaymentError('Payment initiation failed');
        }
      };

      initiatePayment();
    }
  }, [clickPayNow, cart.totalAmount, cart.lineItems, customerDetails]);

  // Handle the post-payment redirect here
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin === "https://uae.paymob.com") { // Validate origin
        if (event.data === "payment_successful") { 
          // Force a full-page redirect
          window.top.location.href = "/";
        }
      }
    };
  
    window.addEventListener("message", handleMessage);
  
    return () => window.removeEventListener("message", handleMessage);
  }, [navigate]);  

  if (!paymentUrl) return null;

  return (
    // <div 
    //   style={{
    //     position: 'fixed',
    //     top: 0,
    //     left: 0,
    //     width: '100%',
    //     height: '100%',
    //     backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     zIndex: 1000
    //   }}
    // >
    //   <div style={{
    //     backgroundColor: 'white',
    //     borderRadius: '12px',
    //     overflow: 'hidden',
    //     boxShadow: '0 0 15px rgba(0,0,0,0.2)'
    //   }}>
    //     <iframe 
    //       src={paymentUrl} 
    //       title="Paymob Payment"
    //       frameBorder="0"
    //       width="1000px"
    //       height="800px"
    //       style={{ borderRadius: '12px' }}
    //     />
    //   </div>
    // </div>

      <div>
        {paymentUrl && (
          <iframe 
            src={paymentUrl} 
            title="Paymob Payment"
            frameBorder="0"
            width="100%"
            height="800px"
            style={{
              display: 'block',
              margin: '0 auto',
              borderRadius: '12px',
              boxShadow: '0 0 10px rgba(0,0,0,0.1)'
            }}
            target="_top"
          />
        )}
      </div>
    );
};

export default PaymobPayment;
