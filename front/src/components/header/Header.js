import React from "react";
import "./Header.styles.css";

const headerPatch = "./assets/images/";

const Header = () => {
  return (
    <div className="header">
      <img src={headerPatch + "logo-aviatur.svg"} />
    </div>
  );
};

export default Header;
