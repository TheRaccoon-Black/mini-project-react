import { useState } from "react";
import EditTask from "./EditTask";

const ToDo = ({ task, index, taskList, setTaskList }) => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);


  const handleDelete = (itemId) => {
    let removeIndex = taskList.indexOf(task);
    taskList.splice(removeIndex, 1);
    setTaskList((currentTasks) =>
      currentTasks.filter((todo) => todo.id !== itemId)
    );
  };
  return (
    <>
      <div className="flex flex-col items-start justify-start bg-white my-4 ml-6 py-4 px-6 w-3/4 max-w-lg">
        <div className="w-full flex flex-row justify-between">
          <p className="font-semibold text-xl">{task.projectName}</p>
          <EditTask
            task={task}
            index={index}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <p className="text-lg py-2">{task.taskDescription}</p>
        <div>
          <div>

          </div>
          <div>
            <span>{("0" + Math.floor((time / 3600000) % 24)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 6000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
            <span className="text-sm">
              :{("0" + ((time / 10) % 100)).slice(-2)}
            </span>

            {/* <span>{("0")+Math.floor((time/3600000)%24).slice(-2)}:</span>
                    <span>{("0")+Math.floor((time/6000)%60).slice(-2)}:</span>
                    <span>{("0")+Math.floor((time/1000)%60).slice(-2)}</span>
                    <span className="text-sm">:{("0"+((time/10)%100)).slice(-2)}</span> */}
            {/* <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span> */}
          </div>
          <div>
            {running? (
            <>
              <button className="bg-grey-400 px-1.5 py-3 rounder hover:opacity-70">Stop</button>
            </>
        ):(
            <>
            <button className="bg-grey-400 px-1.5 py-3 rounder hover:opacity-70">Start</button>
            </>
        )}
          </div>
        </div>
        <div className="w-full flex justify-center">
          <button
            className="bg-red-500 text-white text-sm 
                upppercase font-semibold mt-6 mb-1 py-1.5 
                px-3 rounded-lg"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default ToDo;
