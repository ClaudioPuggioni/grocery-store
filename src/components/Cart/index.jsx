import CartItem from "../CartItem";
import "./styles.css";
import { useContext } from "react";
import PendingPurchase from "../../contexts/PendingPurchase";

export default function Cart(props) {
  let inCart = useContext(PendingPurchase);
  let currCartCopy = { ...inCart.currCart };
  return (
    <div id="cart" style={{ right: props.isCartOpen ? "20px" : "-30%" }}>
      <div id="cartHeader"> Cart Items </div>
      {Object.keys(inCart.currCart).length > 0 ? Object.entries(currCartCopy).map((ele) => <CartItem key={ele[0]} id={ele[0]} name={ele[1].title} price={ele[1].price} quantity={ele[1].count} />) : null}
      <div id="cartFooter">
        Cart Total: $
        {Object.keys(inCart.currCart).length > 0
          ? Object.values(currCartCopy).reduce((acc, cur) => {
              return Number(Number(acc) + cur.price * cur.count).toFixed(2);
            }, 0)
          : 0}
      </div>
    </div>
  );
}
