import axios from "axios";
import { useEffect, useState } from "react";

interface ITask {
  id: number;
  message: string;
  completed: true | false;
}

function App(): JSX.Element {
  //task is being mapped using function setTask
  const [fetchedTasks, setFetchedTasks] = useState<ITask[]>([]);

  useEffect(() => {
    const fetchandStoreAxios = async () => {
      const response = await axios.get("");
      //setTask(response.data)
      const fetchinTasks = response.data;
      //added in [0] and got the array of ids back
      console.log("i am response data", fetchinTasks);
      setFetchedTasks(fetchinTasks);

      //console.log("i am set task", setTask)
    };
    fetchandStoreAxios();
  }, []);
  //item here was an object, cannot map through objs
  const [newTaskMessage, setNewTaskMessage] = useState("");
  //when you input text into the box it will save the input value
  const handleNewTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskMessage(event.target.value);
    console.log(event.target.value);
  };

  useEffect(() => {
    console.log("use effect ran");
  });
  //take the input value from above and post it into my api
  // without useEffect i only see the new task when i refresh- want it to happen automatically!
  const handleAddToDo = () => {
    console.log("handle add todo is working", newTaskMessage);
    axios.post("https://graces-todoapp.onrender.com/items", newTaskMessage);
  };

  return (
    <div>
      <h1>Grace's To Do App</h1>

      <input
        type="text"
        value={newTaskMessage}
        onChange={handleNewTaskChange}
      />
      <button onClick={handleAddToDo}> Add ToDo </button>

      <hr />
      <p>
        {fetchedTasks.map((item, i) => (
          <p key={i}>
            {" "}
            <ItemView passItem={item} />{" "}
          </p>
        ))}
      </p>
    </div>
  );
}
interface ItemViewProps {
  item: ITask;
}

function ItemView(props: ItemViewProps): JSX.Element {
  console.log("the passed props are", props);
  return <>TASK: {props.item.message}</>;
}
export default App;

/*
1. task messages not showing up on screen
2. new entries not showing up in postman 

   
   */
