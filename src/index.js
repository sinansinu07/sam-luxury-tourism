import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './Store/configureStore';
import { AuthProvider } from './Context/AuthContext';

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
          <App />
          <div id="datepicker-portal"></div>
        </Provider>
      </Router>
    </AuthProvider>
  </React.StrictMode>
);

