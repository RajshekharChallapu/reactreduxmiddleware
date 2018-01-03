import axios from 'axios';

const API_KEY = '54d7f73093c9e72ceed90c883709a74e';
/* const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`; */

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER='FETCH_WAETHER';

export function fetchWeather(city){
const url = `${ROOT_URL}&q=${city},us`;
const request =axios.get(url);




    return {
        type: FETCH_WEATHER,
        payload:request
    };
}