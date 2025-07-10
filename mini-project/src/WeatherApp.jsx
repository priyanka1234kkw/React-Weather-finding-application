import Search from "./Search_Box";
import InfoBox from "./InfoBox"
import {useState} from 'react';

export default function WeatherApp(){
    const [weatherInfo , setweatherInfo] = useState(
        {
            city:"",
             temp:"",
             humidity:"",
             tempMin:"",
             tempMax:"", 
        }
    );

    let updateInfo = (newInfo) =>{
            setweatherInfo(newInfo);
    };

    return(
        <div style={{textAlign:"center"}}>
            <h3>Weather App Data</h3>
            <Search updateInfo={updateInfo }/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
} 