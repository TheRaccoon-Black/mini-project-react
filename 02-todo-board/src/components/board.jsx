import React from "react";
const Board = ({task,taskList,index,setTaskList}) =>{
    const handleDelete = () =>{
        let removeIndex = taskList.indexOf(task);
        taskList.splice(removeIndex,1);
        setTaskList((currentTask=>currentTask.filter(todo=>index===removeIndex)))
    }
    return (
        <>
        <div className="max-w-md rounded-xl flex flex-col items-center justify-start border pt-3 pb-4 px-4   text-lg md:px-6">
            <p>{task}</p>
            <button
            className="bg-red-500 text-white px-1 py-2 rounded-lg mt-4"
            onClick={handleDelete}
            >
                Delete
            </button>
        </div>
        </>
    )
}


export default Board;