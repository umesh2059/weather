import { createContext,useContext,useState } from "react";
import {getWeatherDataforCity} from "../api";
const weatherContext=createContext(null);
export const UseWeather=()=>{
    return useContext(weatherContext)
};
export const WeatherProvider =(props)=>{
    const [Data,setData]=useState(null);
    const [searchCity,setSearchCity]=useState(null);
    const FetchData=async()=>{
        const response= await getWeatherDataforCity()
        setData(response);
    }
    return(
        <weatherContext.Provider value={{searchCity,Data,FetchData,setSearchCity}}>
            {props.children}
        </weatherContext.Provider>
    );
};