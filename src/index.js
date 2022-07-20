import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import UserInterface from "./components/UserInterface";
import PendingCxt from "./contexts/PendingPurchase.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <UserInterface />
  </>
);
