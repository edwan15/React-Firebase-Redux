import React from "react";
import Nav from "../nav/Nav";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <Nav />
      </header>
      {children}
    </div>
  );
};

export default Layout;
