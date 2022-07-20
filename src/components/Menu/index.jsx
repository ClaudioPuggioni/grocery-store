import "./styles.css";
import MenuItem from "../MenuItem";
import { useContext } from "react";
import Products from "../../contexts/Products.js";

export default function Menu(props) {
  const productOfferings = useContext(Products);

  return (
    <div id="menu" style={{ width: props.isCartOpen ? "70%" : "100%" }}>
      {productOfferings.map((ele) => (
        <MenuItem key={ele._id} src={ele.images} id={ele._id} title={ele.title} price={ele.price} isCartOpen={props.isCartOpen} />
      ))}
    </div>
  );
}
