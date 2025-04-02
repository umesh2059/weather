
import Button from "./components/button";
import Card from "./components/card";
import Input from "./components/input";
import { useWeather } from "./context/weather";

import './App.css'
import { useState } from "react";

function App() {
  const Weather=useWeather();
  // console.log(Weather);
  return(
    <div className='App'>
      <h1>weather forecast</h1>
      <Input/>

      <Button onClick ={Weather.FetchData} value="search"/>
      
      <Card/>
      <Button value="refresh"/>
    </div>
  );
};

export default App;
