/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import TableRow from "./TableRow";
import "./Table.css";
import config from "../../config";

const Table = ({ Data }) => {
  return (
    <section className="tableBody">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Access</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {Data?.map((data, i) => {
            return <TableRow data={data} key={i} />;
          })}
        </tbody>
      </table>
    </section>
  );
};

export default Table;
