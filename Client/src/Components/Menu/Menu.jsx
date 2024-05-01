/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
import config from "../../config";

const Menu = ({ Icon, Title, Address }) => {
  return (
    <li>
      <Link to={Address}>
        {Icon}
        <span className="text">{Title}</span>
      </Link>
    </li>
  );
};

export default Menu;
