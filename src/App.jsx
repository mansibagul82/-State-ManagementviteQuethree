import React, {useState, useEffect} from "react";
import "./App.css";
import TaskItem from "./components/TaskItem";

function App() {
  const [tasks, setTasks] = useState([]);

  const [formState, setFormState] = useState({
    task: "", // string
    completed: false, // boolean
    taskAssignedTo: "", // string
  });

  function handleChange(event) {
    // Implement logic to handle form changes
    event.preventDefault();
    const targetName =  event.target.name 
    const targetValue = targetName === "completed" ? event.target.checked : event.target.value

    setFormState({
      ...formState,
// when value is always chaning then we use []   or value is fix then use " "
      [event.target.name] : targetValue
    })
  }

  useEffect(()=> {
    console.log(formState)
  },[tasks])

  function handleSubmit(event) {
    event.preventDefault();
    // Implement logic to handle form submission
    setTasks([ ...tasks,formState])

    setFormState({
      task: "", // string
      completed: false, // boolean
      taskAssignedTo: "", // string
    })

  }

  function handleDelete(index)
{
  let updatearray = [...tasks]

  updatearray.splice(index,1)

  setTasks(updatearray)
}

function handleToggle(index){

  let updatearray = [...tasks]

  updatearray[index].completed = !updatearray[index].completed
  setTasks(updatearray)

}

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input name="task" type="text" placeholder="Add Task" value={formState.task} onChange={handleChange}/>
          <label>
            Completed:
            <input name="completed" type="checkbox" onChange={handleChange} />
          </label>
          <select name="taskAssignedTo" onChange={handleChange}>
            <option value="">Select Assignee</option>
            <option value="Bruce">Bruce</option>
            <option value="Barry">Barry</option>
            <option value="Clark">Clark</option>
            <option value="Oliver">Oliver</option>
            <option value="Jina">Jina</option>
          </select>
          <button type="submit">Add Task</button>
        </form>
      </div>
      <hr />
      {tasks.map((item, index) => (
        <TaskItem key={index} item={item} 
        handleDelete ={() => handleDelete(index)}
        handleToggle = {() => handleToggle(index)}/>
      ))}
    </>
  );
}

export default App
