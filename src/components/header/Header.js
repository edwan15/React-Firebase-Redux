import React from "react";
import About from "../about/About";
import Footer from "../Footer/Footer";

const Header = () => {
  return (
    <div className="">
      <header className=" min-h-[370px] w-full bg-[url('https://www.orbcomm.com/img/login/login-hero.jpg')] bg-cover bg-center  bg-no-repeat   "/>
      <About />
      <Footer />
    </div>
  );
};

export default Header;
