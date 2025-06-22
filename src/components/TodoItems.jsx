import React, { useState } from 'react';
import '../App.css'
import { Button } from 'bootstrap';
const TodoItems = ({newItem, setNewItem, todos, setTodos}) => {


    const [editIndex, setEditIndex] = useState(null);
    const handleDelete = (index)=>{
   const updatedtodos = todos.filter((_,i)=>i!== index);
   setTodos(updatedtodos);
    }
    
    const handleEdit = (index) =>{

        setNewItem(todos[index]);
        setEditIndex(index);

    }

    const handleSave = () =>{
 if (!newItem.trim()) return;

        if(editIndex !== null){

             const newTodo = [...todos];
             newTodo[editIndex] = newItem;
             setTodos(newTodo)
             setEditIndex(null);

        }else{

            setTodos( [...todos,newItem]);
        }
        setNewItem('');
     
    }



  return (
    
    <div className='todoContainer'>
        <div className="inputWrapper">


    <input className='addNew' type="text" value={newItem} onChange={(e) =>setNewItem(e.target.value)}placeholder='Enter  A new Task' autofocus></input>
    <button id="doneButton" onClick={handleSave}>{editIndex !== null?"Update":"Save"}</button>
    </div>
    
    <div className='todoItems'>
     

            {todos.map((item,index)=>(

                <div className='Items' key={index}>

            


            <p>{item} </p>  
            <span className='buttons'>
           <button onClick={()=>handleEdit(index)}>Edit</button>
           <button onClick={()=>handleDelete(index)} >Delete</button>
            </span>
            </div>
            ))

            }
       
    </div> 



    </div>
  );
}

export default TodoItems;
