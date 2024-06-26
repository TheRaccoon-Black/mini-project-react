import { useState,useEffect } from "react";

  
const EditTask = ({task,taskList,setTaskList}) =>{
    const [editModal, setEditModal] = useState(false);
    const [projectName, setProjectName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    useEffect(()=>{
        setProjectName(task.projectName);
        setTaskDescription(task.taskDescription );
    },[])

    const handleUpdate = (e) => {
        e.preventDefault();
        let taskIndex = taskList.indexOf(task);
        taskList.splice(taskIndex,1,{
          projectName: projectName,
          taskDescription: taskDescription,
          timestamp: task.timestamp,
          duration: task.duration,
        });
        localStorage.setItem("taskList",JSON.stringify(taskList));
        // setTaskList([...taskList,{projectName,taskDescription}])
        window.location.reload();
        setEditModal(false);

    };

    const handleInput = (e) => {
        const { name, value } = e.target;
        if (name === "projectName") setProjectName(value);
        // console.log(projectName)
        if (name === "taskDescription") setTaskDescription(value);
        // console.log(taskDescription)
    }
        return (
        <>
            <button className="bg-gray-400 text-white text-sm-uppercase font-semibold py-1.5 px-3"
            onClick={()=>setEditModal(true)}
            >
                
                Edit</button>
            {
                editModal?(
                    <>
                        <div className="flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-100">
            <div className="w-9/12 max-w-lg bg-white rounded-lg shadow-md relative flex flex-col">
              <div className="flex flex-row justify-between p-5 border-b border-slate-200 rouded-t">
                <h3 className="text-3xl font-semibold">Edit Task</h3>
                <button
                  className="px-1 text-gray-400 float-right text-3xl leading-none font-semibold block"
                  onClick={() => setEditModal(false)}
                >
                  X
                </button>
              </div>
              <form className="px-6 pt-6 pb-2">
                <div>
                  <label
                    htmlFor="project-name"
                    className="uppercase text-grey-700 text-xs font-semibold mb-2 block"
                  >
                    Project Name
                  </label>
                  <input
                    className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-5 leading-tight focus-outline-none focus-bg-white"
                    type="text"
                    id="project-name"
                    placeholder="Project Name"
                    required
                    name="projectName"
                    value={projectName}
                    onChange={handleInput}
                  />
                </div>
                <label
                  htmlFor="task-description" 
                  className="track-wide uppercase text-grey-700 text-xs font-semibold mb-2 block"
                >
                  Project Description
                </label>
                <textarea
                  className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-5 leading-tight focus-outline-none focus-bg-white"
                  type="text"
                  name="taskDescription"
                  value={taskDescription}
                  onChange={handleInput}
                  id="task-description"
                  placeholder="Text Description"
                  rows="3"
                ></textarea>
              </form>

              <div className="flex justify-end border-t py-6 border-slate-200 rounded-b px-6">
                <button
                  onClick={handleUpdate}
                  className="bg-blue-500 text-white font-semibold uppercase text-sm py-3 px-6 rounded hover:opacity-70 mx-6"
                >
                  Update Task
                </button>
              </div>
            </div>
          </div>
                    </>
                ):null
            }
        </>
    )
}
export default EditTask;