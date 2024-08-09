import React from "react";
import { useTable } from "react-table";

const SalesTable = ({ sales }) => {
  const columns = React.useMemo(
    () => [
      { Header: "ID", accessor: "id" },
      { Header: "Product", accessor: "product" },
      { Header: "Quantity", accessor: "quantity" },
      { Header: "Price", accessor: "price" },
      { Header: "Date", accessor: "date" },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: sales });

  return (
    <table {...getTableProps()} className="data-table">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SalesTable;
