const baseURL="https://api.weatherapi.com/v1/current.json?key=5a5abb40555540a383240610252903"
 
 export const getWeatherDataforCity=async(city)=>{
    const response =  await fetch(`${baseURL}&q=${city}&aqi=yes`)
    return await response.json();
 }; 