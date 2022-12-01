import axios from "axios";
import { useEffect, useState } from "react";
import { greet } from "./utils/greet";

interface ITask {
  id: number 
  message: string 
  completed: true|false
}

function App(): JSX.Element {
  //task is being mapped using function setTask
  const [tasks, setTasks]= useState<ITask[]>([])
  
  useEffect(() => {
    
    const fetchandStoreAxios= async () => {
      const response = await axios.get("https://graces-todoapp.onrender.com/items")
      //setTask(response.data)
      const fetchedTasks = response.data
      //added in [0] and got the array of ids back 
      console.log("i am response data",fetchedTasks)
      setTasks(fetchedTasks);

      //console.log("i am set task", setTask)
    };
      fetchandStoreAxios();
  }, [])
  //item here was an object, cannot map through objs
    

  return (
    <div>
      <h1>Grace's To Do App</h1>
        <p>
          {tasks.map((item, i) => (
              <li key={i}> {item.id} </li> )
          )}
        </p>
    </div>
    
  )
}

export default App;


/*

<ul>
        {task.map((el: ITask, i:number) => (
          <li key={i}> {el}</li> ))}
        </ul>
{setTask.map((item, ix) => (<p key={ix}> {item} </p> ))}

after await: axios.get(
  <ul>
        {setTask.map((el, i) => {<p key={i}> {el}</p> })}
        </ul> 
   
   {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      data: JSON.stringify(fetchedTasks)
    })
     
  () => {
    fetch("https://graces-todoapp.onrender.com/")
       .then(response => response.json())
       .then((jsonBody) => setTask(jsonBody.));
   }, [])
   //as is
    const getAllTasks = async () => {  
    const response = await axios.get("https://graces-todoapp.onrender.com/", 
    const fetchedTasks = response.json
      setTask(fetchedTasks.data);
      console.log(fetchedTasks)
    }
  getAllTasks()
 }, [])
   
   
   */
