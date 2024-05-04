import axios from "axios";
import { useState,useEffect} from "react";
import Feed from "./Feed";

function App() {
  const [articles,setArticles] = useState([]);
  console.log(articles)
  const getArticles = async () =>{
    try {
      const res= await axios.get("http://localhost:4000/");
      setArticles(res.data)
    }catch(error){
      console.log(error);
    }
  }


  useEffect(()=>{
    getArticles();
  },[])
  return (
    <>
      <h1 className="text-xl font-semibold text-center mt-5">05-rss-feed</h1>
      <h2 className="text-3xl font-semibold text-center mt-2 mb-4">Good morning all</h2>
      <div className="w-3/4 max-">
      {articles.map((item,i)=>
          <Feed key={i}
          title={item.title}
          link={item.link}
          date={item.pubDate}
          />
      )}
      </div>
      {/* {articles} */}
    </>
  );
}

export default App;
