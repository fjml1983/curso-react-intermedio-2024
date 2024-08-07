import './App.css';
import BarChartComponent from './components/BarChartComponent';
import LineChartComponent from './components/LineChartComponent';
import { salesData } from './data/salesData';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Charts App</h1>
        <h4>Ejemplo de un gráfico de barras</h4>
        <BarChartComponent data={salesData} />
        <h4>Ejemplo de un gráfico de líneas</h4>
        <LineChartComponent data={salesData} />
      </header>
    </div>
  );
}

export default App;
