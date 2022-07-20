import "./styles.css";
import { useContext } from "react";
import PendingPurchase from "../../contexts/PendingPurchase";

export default function MenuItem(props) {
  let inCart = useContext(PendingPurchase);
  return (
    <div className="menuItem" style={{ marginRight: props.isCartOpen ? "12px" : "30px" }}>
      <div className="itemImageDiv">
        <img className="itemImg" src={props.src.length === 1 ? props.src : props.src[0]} alt={`Product ${props.id}`}></img>
      </div>
      <div className="itemDetails">
        <div className="itemDetailsTop">
          <div className="title">{props.title}</div>
          <div className="price">${props.price}</div>
        </div>
        <div className="itemDetailsBot">
          <div className="itemControls">
            <button
              className="minus"
              onClick={() => {
                let inCartCopy = { ...inCart.currCart };
                if (inCartCopy[props.id] && inCartCopy[props.id].count > 0) {
                  inCartCopy[props.id].count--;
                  if (inCartCopy[props.id].count === 0) delete inCartCopy[props.id];
                  inCart.setCurrCart(inCartCopy);
                }
              }}
            >
              -
            </button>
            <div className="currentCount">{inCart.currCart[props.id] ? inCart.currCart[props.id].count : 0}</div>
            <button
              className="plus"
              onClick={() => {
                let inCartCopy = { ...inCart.currCart };
                if (!inCartCopy[props.id]) {
                  inCartCopy[props.id] = { title: props.title, price: props.price, count: 1 };
                } else if (inCartCopy[props.id]) {
                  inCartCopy[props.id].count++;
                }
                inCart.setCurrCart(inCartCopy);
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
