import "./styles.css";
import Menu from "../Menu";
import Cart from "../Cart";

import offerings from "../../assets/offerings.js";
import Products from "../../contexts/Products.js";

export default function ShopPage(props) {
  return (
    <div id="shop">
      <Products.Provider value={offerings}>
        <Menu isCartOpen={props.isCartOpen} />
      </Products.Provider>
      <Cart isCartOpen={props.isCartOpen} />
    </div>
  );
}
