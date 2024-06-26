import { useState } from "react";
const AddTask = ({taskList, setTaskList}) => {
  const [addModal, setAddModal] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if(!projectName){
      setErrorMessage("Enter Project name to continue")
    }else{
      let timestamp = new Date();
      let tempList = taskList;
      tempList.push(
        {
          projectName,
          taskDescription,
          timestamp: timestamp,
          duration:0
        }
      )
      localStorage.setItem("taskList",JSON.stringify(tempList))
      window.location.reload();
      // setAddModal(false);
      // setTaskList([...taskList,{projectName,taskDescription,timestamp : timestamp}])
      setAddModal(false);
      setProjectName("");
      setTaskDescription("");
    }
    // console.log(taskList)
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "projectName"){
      setProjectName(value);
      setErrorMessage("")
    } 
    if (name === "projectName" && value === "") {
      setErrorMessage("Enter proejct name to continue")
    }
    if (name === "taskDescription") setTaskDescription(value);
    // console.log(taskDescription)
  };
  return (
    <>
      <button
        className="bg-blue-500 text-white uppercase text-sm font-semibold py-1 mx-1.5 pl-2 pr-2.5 rounded hover:opacity-70"
        type="button"
        onClick={() => setAddModal(true)}
      >
        +New
      </button>
      {addModal ? (
        <>
          <div className="flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-100">
            <div className="w-9/12 max-w-lg bg-white rounded-lg shadow-md relative flex flex-col">
              <div className="flex flex-row justify-between p-5 border-b border-slate-200 rouded-t">
                <h3 className="text-3xl font-semibold">Add a New Task</h3>
                <button
                  className="px-1 text-gray-400 float-right text-3xl leading-none font-semibold block"
                  onClick={() => setAddModal(false)}
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
                    className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus-outline-none focus-bg-white"
                    type="text"
                    id="project-name"
                    placeholder="Project Name"
                    required
                    name="projectName"
                    value={projectName}
                    onChange={handleInput}
                  />
                  <p
                  className="text-red-500 text-center mt-2 mb-5"
                  >{errorMessage}</p>
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
                  onClick={handleAdd}
                  className="bg-blue-500 text-white font-semibold uppercase text-sm py-3 px-6 rounded hover:opacity-70 mx-6"
                >
                  Add Task
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default AddTask;
