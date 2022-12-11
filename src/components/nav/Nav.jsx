import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Photo from "../../asset/Edwan.png";
import { FaOpencart } from "react-icons/fa";
import { BsCardChecklist, BsFillMenuButtonWideFill } from "react-icons/bs";
import { BiLogOut, BiHome } from "react-icons/bi";
import { toast } from "react-toastify";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../redux/firebase/config";
import { useDispatch, useSelector } from "react-redux";
import { SET_ACTIVE_USER, REMOVE_USER } from "../../redux/User/UserSlide";

const Nav = () => {
  const cartTotal = useSelector((state) => state.cart.cartTotalQuantity);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [useNav, setuseNav] = useState(false);
  const [displayName, setDisplayName] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.displayName == null) {
          const u1 = user.email.slice(0, 8);
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
          setDisplayName(uName);
        } else {
          setDisplayName(user.displayName);
        }
        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName ? user.displayName : displayName,
            userID: user.uid,
          })
        );
        navigate("/home");
      } else {
        setDisplayName("");
        dispatch(REMOVE_USER());
      }
    });
  }, [dispatch, displayName]);
  // dispatch, displayName, navigate;

  const Logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        toast.success("Logout Successfull..");
        navigate("/");
        localStorage.clear();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <header>
      <div className="hidden fixed  top-0 left-0 right-0 bg-blue-200  sm:grid grid-cols-2 ">
        <div className=" grid grid-cols-6  ">
          <div></div>
          <NavLink to="/home">
            {" "}
            <img
              src={Photo}
              alt="Logo"
              className=" h-10 object- col-start-2 cursor-pointer "
            />{" "}
          </NavLink>
          <NavLink to="/home" className="col-start-4 flex gap-1 py-1">
            {" "}
            Home <BiHome className="text-lg mt-1" />{" "}
          </NavLink>
        </div>

        <div className="grid grid-cols-7">
          <NavLink
            onClick={Logout}
            to=""
            className="flex gap-1 py-1 col-start-5"
          >
            Logout <BiLogOut className="text-lg mt-1 " />
          </NavLink>
          <NavLink to="/product" className="flex gap-1 py-1">
            Product <BsCardChecklist className="text-lg mt-1 " />
          </NavLink>
          <NavLink to="/cart" className="flex py-1 gap-1 relative">
            Cart <FaOpencart className="text-lg mt-1" />
            <div className=" w-4 ">
              <p className="text-sm justify-center items-center mx-auto flex  rounded-full bg-white  ">
                {cartTotal}
              </p>
            </div>
          </NavLink>
        </div>
      </div>
      {/* Mobile Responsive  */}

      <div className="fixed  sm:hidden top-0 left-0 right-0 bg-blue-200  flex justify-between ">
        <div className=" flex ">
          <NavLink>
            {" "}
            <img src={Photo} alt="Logo" className=" object-center w-20 " />{" "}
          </NavLink>
        </div>

        <div className=" flex  justify-center items-center p-2 cursor-pointer">
          <BsFillMenuButtonWideFill
            onClick={() => setuseNav((prev) => !prev)}
            className="text-2xl  "
          />

          {useNav ? (
            <div className="w-40  shadow-xl bg-blue-100  rounded-lg flex flex-col absolute top-11 right-0 p-4">
              <div className="flex flex-col p-2 justify-center items-center">
                <NavLink to="/home" className="col-start-4 flex  gap-1 py-1">
                  {" "}
                  Home <BiHome className="text-lg mt-1" />{" "}
                </NavLink>

                <NavLink to="/product" className="flex gap-1 py-1">
                  Product <BsCardChecklist className="text-lg mt-1 " />
                </NavLink>
                <NavLink to="/cart" className="flex py-1 gap-1 relative">
                  Cart <FaOpencart className="text-lg mt-1" />
                  <div className=" w-4 ">
                    <p className="text-sm justify-center items-center mx-auto flex  rounded-full bg-white  ">
                      {cartTotal}
                    </p>
                  </div>
                </NavLink>
                <NavLink
                  onClick={Logout}
                  to=""
                  className="flex gap-1 py-1 col-start-5"
                >
                  Logout <BiLogOut className="text-lg mt-1 " />
                </NavLink>
              </div>
            </div>
          ) : (
            setuseNav
          )}
        </div>
      </div>
    </header>
  );
};

export default Nav;
