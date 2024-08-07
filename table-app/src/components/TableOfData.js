import React from "react";
import { useTable} from "react-table";
import { usersData } from "../data/usersData";
import '../App.css';

const TableOfData = () => {    
    const data = React.useMemo(() => usersData,[]);
    const columns = React.useMemo(() => [
        {Header: 'ID',accessor: 'id'},
        {Header: 'Email',accessor: 'email'},
        {Header: 'Avatar',accessor: 'avatar'},
        {Header: 'Age',accessor: 'age'}],[]);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({columns,data});

    return (
        <table {...getTableProps()} className="data-table">
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};        

export default TableOfData;