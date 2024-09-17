import React from 'react'
import { useWeather } from "../Context/Weather"


function Input() {
    const weather = useWeather();
    // console.log(weather)
    return (
        <div >
            <input className='input-field'
            placeholder='Search City Weather'
                value={weather.searchCity}
                onChange={(e) => weather.setSearchCity(e.target.value)} />
        </div>
    )
}

export default Input
