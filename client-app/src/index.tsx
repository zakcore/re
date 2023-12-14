import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-calendar/dist/Calendar.css'
import 'react-toastify/dist/ReactToastify.min.css'
import 'semantic-ui-css/semantic.min.css'
import reportWebVitals from './reportWebVitals';
import './App/Layout/Styles.css';
import App from './App/Layout/App';

import { StoreContext, store } from './App/stores/store';
import { BrowserRouter, RouterProvider, useNavigate,  } from 'react-router-dom';
import { router } from './router/Routes';

    

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
    <RouterProvider router={router}  />

    </StoreContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
