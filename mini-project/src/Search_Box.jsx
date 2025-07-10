import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./search.css";

export default function Search({updateInfo }){
     let [city , setCity] = useState("");
    const API_URL= "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="0647f60352cabcb65bd14ed551adf5bd";

    let getWeatherData = async()=>{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let getWeatherdata = await response.json();

            let result = {
                city:city,
                temp:getWeatherdata.main.temp,
                tempMin : getWeatherdata.main.temp_min,
                tempMax : getWeatherdata.main.temp_max,
                humidity : getWeatherdata.main.humidity,
                weather:getWeatherdata.weather[0].description,

            };
            return result;
            
    }
   

    let handleChange =(event)=>{
            setCity(event.target.value);
    };

    let handleSubmit = async (event) =>{
        event.preventDefault();
        setCity("");
        let Info = await getWeatherData();
        updateInfo(Info);
    };

    return(
        <div className='search_box'>
            <h3 style={{color:"black"}}>Search For the Weather</h3>
            <form action="" onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" value={city} required onChange={handleChange}/>
                &nbsp;&nbsp;&nbsp;
                 <Button variant="contained" type="submit"> Send </Button>
            </form>
        </div>
    );
}


