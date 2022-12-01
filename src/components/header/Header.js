import React from "react";
import About from "../about/About";
import Footer from "../Footer/Footer";

const Header = () => {
  return (
    <>
      <header className="min-h-[270px] w-full bg-[url('https://www.orbcomm.com/img/login/login-hero.jpg')] bg-cover bg-center  bg-no-repeat  ">
      </header>
      <About />
      <Footer />
    </>
  );
};

export default Header;
