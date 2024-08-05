import './App.css';
import React, { useEffect } from 'react';

function App() {

  const [contador, setContador] = React.useState(0);

  //guardar el contador en localstorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('contador', contador);
  }, [contador]);

  //recuperar el contador desde localstorage al iniciar el componente
  useEffect(() => {
    const contadorLocal = localStorage.getItem('contador');
    if(contadorLocal){
      setContador(parseInt(contadorLocal));
    }
  }, []);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setContador(contador => contador + 1);
    },1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Contador</h1>
        <p>{contador}</p>
        <button onClick={() => setContador(contador + 1)}>Aumentar ➕</button>
        <button onClick={() => setContador(contador - 1)}>Disminuir ➖</button>
        <button onClick={() => setContador(0)}>Reiniciar 🔃</button>        
      </header>
    </div>
  );
}

export default App;
