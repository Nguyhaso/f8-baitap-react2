const TodoItem=({task, onDelete})=>{
    return(
        <li className={"todo-item"}>
            {task.text}
            <button onClick={onDelete}>Delete</button>
        </li>
    )
}
export default TodoItem