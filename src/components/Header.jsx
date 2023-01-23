import React, { useState } from "react";

import Logo from "../assets/img/logo.png";
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";

import { FaBars } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <div className="">
          <a href="#">
            <img src={Logo} alt="" />
          </a>

          <div className="hidden lg:flex">
            <Nav />
          </div>

          <div className="xl:hidden">
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
