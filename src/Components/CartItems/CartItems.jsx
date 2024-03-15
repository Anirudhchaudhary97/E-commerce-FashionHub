import React from "react";
import "./CartItems.css";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assest/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart } = useContext(ShopContext);
  return (
    <div className="cart-items">
      <div className="cart-items-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) =>
        cartItems[e.id] > 0 ? (
          <div>
            <div className="cart-items-format">
              <img src={e.image} alt="" className="carticon-product-icon" />
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <button className="cart-items-quantity">{cartItems[e.id]}</button>
              <p>{e.new_price*cartItems[e.id]}</p>
              <img
                src={remove_icon}
                alt=""
                onClick={() => {
                  removeFromCart(e.id);
                }}
              />
            </div>
            <hr />
          </div>
        ) : (
          null
        )
      )}
    </div>
  );
};

export default CartItems;
