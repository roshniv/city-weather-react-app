import './App.css';
import React, { useState } from "react";
import Weather from './components/weather';
import ErrorCard from './components/error';

export default function App() {
  
  const [city, setCity] = useState('');
  const [data, setData] = useState([]);

  const search = evt => {
   if (evt.key === 'Enter') {
     fetch(`${process.env.REACT_APP_API_URL}/weather?q=${city}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
          .then(result => {
            setData(result);
            setCity('');
            console.log(result)
          })
        .catch(error => {
           console.error('There was an error!', error);
        });
    }
  }
  
  return (
    <div className="App">
      <input type="text" id="search-bar" className="search-bar" placeholder="Enter your city" onChange={e => setCity(e.target.value)} value={city} onKeyPress={search}></input>
      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data}/>
      ) : ((typeof data.cod != 'undefined') ? (
        <ErrorCard errorData={data}/>
      ) : ( 
        <div></div>
      ))}
      
    </div>
  );
}