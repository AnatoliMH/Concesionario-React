import React from "react";
import "./Table.css";

const Table = ({ data }) => {
  return (
    <div className="contTable">
      <table className="table">
        <caption className="tableTitle">Resultados de la búsqueda</caption>
        <thead>
          <tr>
            {Object.keys(data[0]).map((keyName, index) => {
              return (
                <th key={"th_" + index} className="first-row">
                  {keyName}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((elem, index) => {
            return (
              <tr key={"tr_" + index} className="row-data">
                {Object.values(elem).map((data, index) => {
                  return <td key={"td_" + index}>{data}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
