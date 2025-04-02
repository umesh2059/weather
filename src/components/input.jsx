import React from "react"
import {useWeather} from "../context/weather";

const Input=()=>{
    const Weather= useWeather();
    console.log("Weather",Weather);
    return(
        <input
        className="input-field"
         placeholder="search here"
         value={Weather.setSearchCity}
          onChange={(e)=>Weather.setSearchCity(e.target.value)}/>
    );
};
export default Input;