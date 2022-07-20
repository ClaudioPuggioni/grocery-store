import "./styles.css";
import { useContext } from "react";
import PendingPurchase from "../../contexts/PendingPurchase";

export default function Header(props) {
  let inCart = useContext(PendingPurchase);
  let currCartCopy = { ...inCart.currCart };
  return (
    <div id="header">
      <div id="title">GOKiS</div>
      <div id="cartIcon" onClick={() => props.cartCtrl((e) => (e ? false : true))}>
        <img id="cartImg" src="/images/cart.svg" alt="cart icon" />
        <div id="cartQuantity" style={{ display: Object.keys(currCartCopy).length === 0 ? "none" : "" }}>
          {Object.values(currCartCopy).reduce((acc, cur) => {
            return acc + cur.count;
          }, 0)}
        </div>
      </div>
    </div>
  );
}
