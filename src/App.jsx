import { useState } from 'react'
import './App.css'
import TodoItem from './components/task'

function App() {
    const[list, setList] = useState([])
    const[todo, setTodo] = useState('')

    const addTask =() =>{
        if(todo === "") return
        if(list.includes(todo)){
            alert('Task already exists!')
            return
        }
        setList([...list, todo])
        setTodo('')
    }

    const setTask = (e)=>{
        setTodo(e.target.value)
        console.log(e.target.value)
    }
    const deleteTask =(index)=>{
        const newList = [...list]
        newList.splice(index,1)
        setList(newList)
    }

    return (
        <div className="container">
            <h1>To-Do List</h1>
            <input type={"text"} value={todo} placeholder={"What is your task?"} onChange={setTask}/>
            <button onClick={addTask}>Add</button>
            <ul>
                {list.map((task,index) =>(
                    <TodoItem
                    key={index}
                    task={{text:task}}
                    onDelete={() => deleteTask(index)}
                    />
                     ))}
            </ul>
        </div>
    );
}

export default App;
