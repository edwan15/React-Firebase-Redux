import React from "react";
import { NavLink } from "react-router-dom";
import Photo from "../../asset/Edwan.png";

const Nav = () => {
  return (
    <div>
      <div>
        <NavLink>
          {" "}
          <img src={Photo} alt="Logo" />{" "}
        </NavLink>
        <NavLink> Home </NavLink>
        <NavLink> Contacto </NavLink>
      </div>

      <div>
        <NavLink>Login</NavLink>
        <NavLink>Logout</NavLink>
        <Link to="/product">Product</Link>
        <NavLink>Cart</NavLink>
      </div>
    </div>
  );
};

export default Nav;
