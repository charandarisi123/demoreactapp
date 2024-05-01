/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import config from "../../config";

const SalesDiv = ({ Icon, Title, Number }) => {
  return (
    <li>
      <div>{Icon}</div>
      <span className="text">
        <h3>{Number}</h3>
        <p>{Title}</p>
      </span>
    </li>
  );
};

export default SalesDiv;
