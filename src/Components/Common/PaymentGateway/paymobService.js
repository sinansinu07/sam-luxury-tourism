import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY
const INTEGRATION_ID = process.env.REACT_APP_INTEGRATION_ID
const SECRET_KEY = process.env.REACT_APP_SECRET_KEY

const PaymobService = {
  // Get Authentication Token
  getAuthToken: async () => {
    try {
      const response = await axios.post(
        'https://uae.paymob.com/api/auth/tokens', 
        { api_key: API_KEY }
      );
      // console.log("Auth Token Response:", response.data);
      return response.data.token;
    } catch (error) {
      console.error('Error fetching Auth Token:', error);
      throw error;
    }
  },

  // Create Payment Intention
  createIntention: async (authToken, amount, lineItems, customerDetails) => {
    try {
      const orderData = {
        amount: amount * 100, // Convert to cents
        currency: "AED",
        payment_methods: [
          INTEGRATION_ID
        ], // Assuming 158 is the payment method ID for card payments
        items: lineItems.map((item) => {
          const TourDescription = `${item.tourOption} for ${item.adult ? `${item.adult} Adult` : ''}${item.adult && item.child ? ' and ' : ''}${item.child ? `${item.child} Child` : ''}`
          return {
            name: item.name,
            amount: item.amount * 100,
            description: TourDescription
            // description: item.tourOption,
            // quantity: item.adult + item.child
        }
      }),
        billing_data: {
          first_name: customerDetails.firstName,
          last_name: customerDetails.lastName,
          email: customerDetails.email,
          phone_number: customerDetails.phone,
          country: customerDetails.nationality,
        },
        special_reference: `order-${Date.now()}`,
        notification_url: "https://webhook.site/dabe4968-5xxxxxxxxxxxxxxxxxxxxxx",
        redirection_url: 'https://www.samluxurytours.com/?paymentStatus=success',
      };

      console.log(orderData)

      const response = await axios.post(
        'https://uae.paymob.com/v1/intention/',
        orderData,
        {
          headers: {
            Authorization: `Token ${SECRET_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );

      console.log("Create Intention Response:", response.data);
      return response.data;
      
    } catch (error) {
      console.error('Error creating payment intention:', error);
      throw error;
    }
  }
};

export default PaymobService;