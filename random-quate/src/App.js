import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [sorgu,setSorgu] = useState("");
 
  const getSorgu = () => {
    fetch("https://type.fit/api/quotes")
    .then(res =>  res.json())
    .then(data => {
      let randomSoz = Math.floor(Math.random()*data.length)
      setSorgu(data[randomSoz])
    })  
  }

  useEffect(() => {
    getSorgu();
  },[])
  
  return (
    <div className="App">
  
    <p className='sorgu'> {sorgu.text} </p>
    <p className='sorgu'> {sorgu.author} </p>
    <br/>
    
    <button className='button' onClick={getSorgu}> Get New Quates </button>
    



    </div>
  );
}

export default App;

