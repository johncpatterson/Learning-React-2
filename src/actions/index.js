import axios from 'axios';

const API_KEY = 'f5e364968f16eed20ecfaf7efa2d6303';

export const FETCH_WEATHER = 'FETCH_WEATHER'
export const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}&units=imperial&us`;
  const request = axios.get(url);
  console.log(request);
  
  return {
    type: FETCH_WEATHER,
    payload: request //payload is a promise so Redux Promis stops the action 
    //and once request finishes Redux Promise dispatches a new action of the same 
    //type but with a payload of the resolved request (unwraps the promise) and sends it to the reducer.
  };
}