// DataRow.jsx
import React from "react";
import DataCell from "../dataCell";

const DataRow = ({ rowData }) => {
  return (
    <tr>
      {Object.values(rowData).map((data, index) => (
        <DataCell key={index} value={data} />
      ))}
    </tr>
  );
};

export default DataRow;
