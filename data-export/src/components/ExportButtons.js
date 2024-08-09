import { CSVLink } from "react-csv";
import * as XLSX from "xlsx";
import {salesData} from "../data/salesData";
import '../App.css';

function ExportButtons() {
  const csvData = salesData.map((row) => {
    return {
      Date: row.date,
      Sales: row.sales,
      Expenses: row.expenses,
      Profit: row.profit
    };
  });

  const exportToCSV = () => {
    const ws = XLSX.utils.json_to_sheet(csvData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "sales_data.xlsx");
  };

  return (
    <div className="export-buttons">
      <CSVLink data={csvData} filename="sales_data.csv">
        <button className="btn-export">Export to CSV</button>
      </CSVLink>
      <button className="btn-export" onClick={exportToCSV}>
        Export to Excel
      </button>
    </div>
  );
};

export default ExportButtons;