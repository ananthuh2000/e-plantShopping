// main.jsx or index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';  // Import Provider from react-redux
import store from './store';  // Import the store

// Wrap the App component with the Provider and pass the store as a prop
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>  {/* Pass the store to the Provider */}
      <App />
    </Provider>
  </React.StrictMode>
);
