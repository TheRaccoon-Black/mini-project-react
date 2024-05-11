import {useState} from "react";
function App() {
  const [userInfo,setUserInfo] = useState({
    firstName:"",
    lastName:"",
    email:"",
    dob:"",
    gender:"",
    prompt1:"",
    answer1:""
  })
  const handleInput = (e) =>{
    const {name, value} = e.target;
    setUserInfo({
      ...userInfo,[name]:value
    })
  }
  const handleAddPrompt=()=>{
    
  }
  console.log(userInfo);
  return (
    
    <>
      <h1 className="text-3xl text-center my-4 py-2">06-react-forms</h1>
      <form className="w-5/6 max-w-md mx-auto pt-4 pb-10">
        <fieldset className="flex flex-col border py-1 px-4">
          <legend className="text-2xl font-semibold text-gray-500">About You</legend>
          <div>
          <label className="text-3xl font-semibold">What's your name?</label>
          <input
           className="w-4/5 border rounded text-lg leading-tight py-3 px-2 mt-4 focus:outline-indigo-200"
           id="firstName" 
           name="firstName" 
           type="text"
           placeholder="First Name" 
           onChange={handleInput}/> 
          <input
           className="w-4/5 border rounded text-lg leading-tight py-3 px-2 mt-4 focus:outline-indigo-200 mb-4"
           id="lastName" 
           name="lastName" 
           type="text"
           placeholder="Last Name" 
           onChange={handleInput}/> 
           </div>
           <div>
           <label className="text-3xl font-semibold">What's your email</label>
           <input 
           className="w-4/5 border rounded text-lg leading-tight py-3 px-2 mt-4 focus:outline-indigo-200 mb-4"
           id="email"
           name="email"
           type="email"
           placeholder="email@example.com"
           onChange={handleInput}/>
           </div>
           <div>
           <label className="text-3xl font-semibold">What's your date of birth</label>
           <input
           className="w-3/5 border rounded text-lg leading-tight py-3 px-2 mt-4 focus:outline-indigo-200 mb-4"
           id="dob"
           name="dob"
           max="2005-01-27"
           type="date"
           placeholder="Date of birth"
           onChange={handleInput}/>
           </div>
           <div className="flex flex-col">
           <label className="text-3xl font-semibold">What's your gender</label>
           <select 
           className="w-3/5 border rounded text-lg leading-tight py-3 px-2 mt-4 focus:outline-indigo-200 mb-4"
            id="gender" name="gender" onChange={handleInput}>
            <option>Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
           </select>
           </div>
        </fieldset>
        <fieldset className="flex flex-col border py-1 px-4">
          <legend className="text-2xl font-semibold text-gray-500">
            Prompts
          </legend>
          <div className="flex flex-col">
            <label className="text-3xl font-semibold">select a Prompt</label>
            <select className="w-3/5 border rounded text-lg leading-tight py-3 px-2 mt-4 focus:outline-indigo-200 mb-4"
            id="prompt1" name="prompt1" onChange={handleInput}>
              <option value={"Dating me is like..."}>Dating me is like...</option>
              <option value={"Fact about me that surprises people"}>Fact about me that surprises people:</option>
              <option value={"I want someone who..."}>I want someone who...</option>
              <option value={"I spend of most money on :"}>I spend of most money on :</option>
              <option value={"the most spontanoes thing i've done:"}>the most spontanoes thing i've done:</option>
              <option value={"We're the same type of weird if..."}>We're the same type of weird if...</option>
            </select>
            <textarea className="border border-dashed mb-4 py-3 px-2" id="answer1" name="answer1" rows={5} placeholder="let your true colour shine through" onChange={handleInput}/>
          </div>
          <div className="w-full flex justify-center">
            <button className="border bg-indigo-400 py-1 px-2 rounded-lg text-white font-bold text-xl"
            type="button"
            onClick={handleAddPrompt}
            >Add Prompt</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default App;
