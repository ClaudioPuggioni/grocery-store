import { useState } from "react";
import Header from "../Header";
import ShopPage from "../ShopPage";
import "./styles.css";
import PendingPurchase from "../../contexts/PendingPurchase";

export default function UserInterface() {
  let [currCart, setCurrCart] = useState({});
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <div id="container">
      <PendingPurchase.Provider value={{ currCart, setCurrCart }}>
        <Header isCartOpen={cartOpen} cartCtrl={setCartOpen} />
        <ShopPage isCartOpen={cartOpen} />
      </PendingPurchase.Provider>
    </div>
  );
}
