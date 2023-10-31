import React from 'react';
import ReactDOM from 'react-dom/client';
import './App/Layout/Styles.css';
import App from './App/Layout/App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import { StoreContext, store } from './App/stores/store';
import { BrowserRouter, createBrowserRouter } from 'react-router-dom';

    

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <BrowserRouter>
    <App />
      </BrowserRouter>
    </StoreContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
