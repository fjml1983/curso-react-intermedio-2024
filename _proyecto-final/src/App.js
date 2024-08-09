import "./styles.css";
import SalesChart from "./components/SalesChart";
import ExportButtons from "./components/ExportButtons";
import SalesForm from "./components/SalesForm";
import SalesTable from "./components/SalesTable";
import React from "react";

export default function App() {
  const [salesData, setSalesData] = React.useState([
    {
      id: 1,
      product: "Laptop",
      quantity: 5,
      price: 12000.0,
      date: "01/08/2024",
    },
  ]);

  return (
    <div className="App">
      <header>
        <h1>FINAL PROJECT 🐱‍👤</h1>
        <h3>React JS IECA course 🎩</h3>
      </header>
      <main>
        <hr />
        <h1>Sales Form</h1>
        <SalesForm sales={salesData} setSales={setSalesData} />

        <hr />
        <h1>Sales Table</h1>
        <SalesTable sales={salesData} />

        <hr />
        <h1>Sales App</h1>
        <SalesChart sales={salesData} />

        <hr />
        <h1>Export data </h1>
        <ExportButtons sales={salesData} />
      </main>
      <footer>
        <div>
          <b>Integrantes del equipo:</b>
        </div>
        <div>Fernando José Martínez López</div>
        <div>Gustavo Iván Vega Olvera</div>
        <div>Luis Germán Gutiérrez Torres</div>
      </footer>
    </div>
  );
}
