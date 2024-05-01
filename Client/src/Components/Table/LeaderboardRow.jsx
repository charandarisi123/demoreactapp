/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import config from "../../config";

const LeaderboardRow = ({ data }) => {

  return (
    <tr className="tableRow">
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>{data.class}</td>
      <td>{data.totalQuiz}</td>
      <td>{data.totalPoints}</td>
    </tr>
  );
};
export default LeaderboardRow;
