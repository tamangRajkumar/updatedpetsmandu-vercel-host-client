import React from "react";
import ReactDOM from "react-dom";
import "./containers/index.css";
import App from "./containers/App";
import { BrowserRouter } from "react-router-dom";

// Import Slick Slider CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// React Tostify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from "./redux/store";
const app = (
  <BrowserRouter>
    <Provider store={store}>
      <SkeletonTheme baseColor="	#F0F0F0" highlightColor="	#E0E0E0">
        <App />
        <ToastContainer position="bottom-right" />
      </SkeletonTheme>
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
