// DataTable.jsx
import React from "react";
import DataRow from "../dataRow";
import { Arrow } from "../icons";

const DataTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th className="flex">
            Id <Arrow />
          </th>
          <th>
            Заголовок <Arrow />
          </th>
          <th>
            Описание <Arrow />
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((rowData, index) => (
          <DataRow key={index} rowData={rowData} />
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
