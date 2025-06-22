

// import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from 'react';
import './App.css'
import TodoHeading from './components/TodoHeading';
import TodoItems from './components/TodoItems';

function App() {

const[newItem, setNewItem] = useState("");
const[todos, setTodos] = useState(()=>{

  const storedState = localStorage.getItem("todos");
  return storedState? JSON.parse(storedState):[];
});


useEffect(()=>{

  localStorage.setItem("todos",JSON.stringify(todos))
},[todos])
  return (
    <> 

      <div className="container">

        <TodoHeading  ></TodoHeading>
        <TodoItems
  newItem={newItem}
  setNewItem={setNewItem}
  todos={todos}
  setTodos={setTodos}
/>

      </div>
    </>
      )};
 
export default App;
