import React from "react";
import { NavLink } from "react-router-dom";
import Photo from "../../asset/Edwan.png";
import {FaOpencart} from "react-icons/fa"
import {BsCardChecklist} from "react-icons/bs"
import { GrContact } from "react-icons/gr";
import { BiLogOut, BiLogIn, BiHome } from "react-icons/bi";
const Nav = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-blue-200  grid grid-cols-2 ">
      <div className=" grid grid-cols-6 ">
        <div></div>
        <NavLink>
          {" "}
          <img
            src={Photo}
            alt="Logo"
            className=" h-10 object- col-start-2 "
          />{" "}
        </NavLink>
        <NavLink to="/home" className="col-start-4 flex gap-1 py-1">
          {" "}
          Home <BiHome className="text-lg mt-1" />{" "}
        </NavLink>
        <NavLink to="/contact" className="flex gap-1 py-1">
          {" "}
          Contacto <GrContact className="text-lg mt-1 " />{" "}
        </NavLink>
      </div>

      <div className="grid grid-cols-7">
        <NavLink to="/" className="col-start-4 flex gap-1 py-1">
          Login <BiLogIn className="text-lg mt-1" />
        </NavLink>
        <NavLink className="flex gap-1 py-1">
          Logout <BiLogOut className="text-lg mt-1 " />
        </NavLink>
        <NavLink to="/product" className="flex gap-1 py-1">
          Product <BsCardChecklist className="text-lg mt-1 " />
        </NavLink>
        <NavLink className="flex py-1 gap-1">
          Cart <FaOpencart className="text-lg mt-1" />
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
