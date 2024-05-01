/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Header.css";
import { BiHome } from "react-icons/bi";
import config from "../../config";

const Header = ({ Title, Address }) => {
  return (
    <div className="head-title">
      <div className="head-left">{Title}</div>
      <div className="head-right">
        <BiHome /> <p>/ Dashboard</p> <span>/ {Address}</span>
      </div>
    </div>
  );
};

export default Header;
