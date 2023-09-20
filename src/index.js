import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/store';
import { Provider } from 'react-redux';
import Project from './models/ProjectsClass';
import firebaseconnection from './models/connection';

store.subscribe(()=>console.log(store.getState()));



const root = ReactDOM.createRoot(document.getElementById('root'));





root.render(

  
  <React.StrictMode>
   
    {/* <BrowserRouter>  */}
    <Provider store={store}>
    <App />
    </Provider>
   {/* </BrowserRouter> */}
  </React.StrictMode>
);

reportWebVitals();
