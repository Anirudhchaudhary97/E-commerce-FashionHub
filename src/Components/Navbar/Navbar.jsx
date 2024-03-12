import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assest/logo.png";
import cart_icon from "../Assest/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
    <Link to={"/"} className="text-link"><div className="nav-logo">
        <img src={logo} alt="" />
        <p>
          <span>Fashion</span>Hub
        </p>
      </div>
      </Link>

      <ul className="nav-menu">
        <Link to="/" className="text-link">
          <li
            onClick={() => {
              setMenu("shop");
            }}
          >
            Shop{menu === "shop" ? <hr /> : <></>}
          </li>
        </Link>
        <Link to="/men" className="text-link">
          <li
            onClick={() => {
              setMenu("men");
            }}
          >
            Men{menu === "men" ? <hr /> : <></>}
          </li>
        </Link>
        <Link to="/women" className="text-link">
          <li
            onClick={() => {
              setMenu("women");
            }}
          >
            Women {menu === "women" ? <hr /> : <></>}
          </li>
        </Link>
        <Link to="kids" className="text-link">
          <li
            onClick={() => {
              setMenu("kids");
            }}
          >
            Kids{menu === "kids" ? <hr /> : <></>}
          </li>
        </Link>
      </ul>
      <div className="nav-login-cart">
        <Link className="text-link" to="/login">
          <button>Login</button>
        </Link>
        <Link className="text-link" to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
