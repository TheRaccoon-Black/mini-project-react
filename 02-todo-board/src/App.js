import {useState} from "react";
import Input from "./components/Input";
import Board from "./components/board";

function App() {
  const [taskList, setTaskList] = useState([]);
  return (
    <>
    <div className="flex flex-col items-center justify-center py-8 gap-4">
    <h1 className="text-xl font-semibold">02-todo board</h1>
    <Input taskList={taskList} setTaskList={setTaskList}/>
    </div>
    <div className="flex flex-col gap-4 sm:grid sm:grid-cols-3 px-4 sm:px-8 sm:px-10">
    {
  taskList.map((task, index) => (
        <Board 
        key={index}
        task={task}
        index={index}
        taskList={taskList}
        setTaskList={setTaskList}
        />
      ))
    }

    </div>
    </>
  );
}

export default App;
