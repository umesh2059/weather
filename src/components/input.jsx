import React from "react"
import { UseWeather } from "../context/weather";

const Input=(props)=>{
    const Weather=UseWeather();
    console.log("Weather",Weather);
    return(
        <input
        className="input-field"
         placeholder={props.placeholder} 
         value={props.value}
          onChange={props.onChange}/>
    );
};
export default Input;