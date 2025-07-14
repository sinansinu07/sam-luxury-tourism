import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './Store/configureStore';
import { AuthProvider } from './Context/AuthContext';
import { Helmet } from 'react-helmet';
import { HelmetProvider } from 'react-helmet-async';

const store = configureStore()

store.subscribe(() => {
  console.log(store.getState())
})

console.log(store.getState())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <Provider store={store}> 
          <HelmetProvider>
            <App />
          </HelmetProvider>
          <div id="datepicker-portal"></div>
        </Provider>
      </Router>
    </AuthProvider>
  </React.StrictMode>
);

