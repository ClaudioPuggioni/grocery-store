import "./styles.css";
import { useContext } from "react";
import PendingPurchase from "../../contexts/PendingPurchase";

export default function CartItem(props) {
  let inCart = useContext(PendingPurchase);

  return (
    <div className="cartItem">
      <div className="cartItemName">{props.name}</div>
      <div className="cartItemPrice">Price: ${props.price}</div>
      <div className="cartItemQuantity">Quantity: {props.quantity}</div>
      <button
        className="cartItemDelete"
        onClick={() => {
          let currCartCopy = { ...inCart.currCart };
          delete currCartCopy[props.id];
          inCart.setCurrCart(currCartCopy);
        }}
      >
        ×
      </button>
    </div>
  );
}
