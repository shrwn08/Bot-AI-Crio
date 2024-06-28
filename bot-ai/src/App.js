import React,{useState,useEffect} from 'react'
import Home from './Components/Home';
import QuesAnsData from './Components/Json-Data/QAData'
import './App.css';

function App() {
  const [data, setData] = useState([])

  useEffect(()=>{
    setData(QuesAnsData)
    
  },[])
  
  // console.log(data)
  return (
    <div className="App">
      <Home data = {data}/>
      {/* <FeedbackPop /> */}
    </div>
  );
}

export default App;
