//Tech Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
//Comp Imports
import reducer from "./store/reducer";
import App from './App';
import reportWebVitals from './reportWebVitals';
//Styling Imports
import "./css/app.css";
import "./css/body.css";
import "./css/header.css";

//Pls do not edit, essential to redux
const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
