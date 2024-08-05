import './App.css';
import React from 'react';

function App() {
  const [valor, setValor] = React.useState("");
  const [tareas, setTareas] = React.useState([]);  

  //Actualizar el valor desd eun Input
  function handleChange(e){
    setValor(e.target.value);
  }

  //Agregar una tarea
  function addTarea(){
    if(valor.trim() !== ""){
      setTareas([...tareas, {text: valor, completed:false, id: Date.now()}]);
      setValor(""); //Limpiar el input
    }
  }

  //Marcar tarea completada
  function toogleCompleteTarea(index){
    const nuevaLista = [...tareas];
    nuevaLista[index].completed = !nuevaLista[index].completed;
    setTareas(nuevaLista);
  }

  //Eliminar tarea
  function deleteTarea(index){
    const nuevaLista = [...tareas];
    nuevaLista.splice(index, 1);
    setTareas(nuevaLista);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de tareas</h1>
        <input type="text" value={valor} onChange={handleChange} placeholder='Agregar nueva tarea'/>
        <button onClick={addTarea}>Agregar</button>
        <ul>
          {tareas.map((tarea, index) => (
            <li key={tarea.id}>
              <span style={{textDecoration: tarea.completed ? 'line-through' : 'none'}}>{tarea.text}</span> 
              {(tarea.completed ? ' 😊' : '')}       
              <input type="checkbox" onChange={() => toogleCompleteTarea(index)} checked={tarea.completed}/>
              <button onClick={() => deleteTarea(index)}>Eliminar</button>
            </li>
          ))}          
        </ul>
      </header>
    </div>
  );
}

export default App;
