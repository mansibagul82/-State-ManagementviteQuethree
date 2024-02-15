function TaskItem ({item, handleDelete}) {
    return(
        <div> 
            Task Item 
            <h3 style={{color: item.completed ? "green" : "red"}}>{item.task}</h3>
            <p>{item.completed.toString()}</p>
            <button onClick={handleToggle}>{item.completed ? "Yes" : "No"}</button>
            <p>{item.taskAssignedTo}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default TaskItem