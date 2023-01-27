import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./salesforce-lightning-design-system-offline.min.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <div class="full-height full-width">
            <div class="slds-box_border slds-theme_default full-height-relative full-width-relative">
                <div class=" slds-p-horizontal_large slds-p-vertical_large full-height-relative full-width-relative">
                    <App />
                </div>
            </div>
        </div>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
