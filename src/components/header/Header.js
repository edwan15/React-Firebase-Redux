import React from "react";
import { useSelector } from "react-redux";
import About from "../about/About";
import Footer from "../Footer/Footer";


const Header = () => {

  const  name = useSelector((state) => state.auth);


  return (
    <div className="">
      <div className=" mb-10 sm:mb-12 ">
        <header className="flex h-[200px]  w-full sm:h-72 md:h-96  lg:h-96 lg:w-full bg-[url('https://www.orbcomm.com/img/login/login-hero.jpg')] bg-cover  bg-no-repeat  sm:bg-cover   md:bg-center  mt-10    ">
          <div className="py-16 absolute   h-[200px] flex md:w-full    ">
            <div className="">
              <h1 className="px-4 text-xl mt-36  sm:text-3xl md:text-5xl lg:text-7xl text-gray-900  font-bold sm:mt-56 md:mt-80 lg:mt-80 ">
                Bienvenido {name.userName} ..!!
              </h1>
            </div>
          </div>
        </header>
      </div>
      <About />
      <Footer />
    </div>
  );
};

export default Header;
