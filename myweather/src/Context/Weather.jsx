import { createContext, useContext, useState } from 'react'
import { getWeatherDataForCity, getWeatherDataForLocation } from "../api/Index"

const WeatherContext = createContext(null);

export const useWeather = () => {
    return useContext(WeatherContext);
}

export const WeatherProvider = (props) => {
    const [data, setData] = useState(null)
    const [searchCity, setSearchCity] = useState(null)

    const fetchData = async () => {
        const response = await getWeatherDataForCity(searchCity);
        setData(response);

    }

    const fetchCurrentLocationUserData = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            getWeatherDataForLocation(
                position.coords.latitude,
                position.coords.longitude
                //user ka current location get karhi hu woh jaha pe h
            ).then((data) => setData(data))
        })
    }
    return (
        <WeatherContext.Provider
            value={{
                searchCity,
                data,
                setSearchCity,
                fetchData,
                fetchCurrentLocationUserData
            }}>
            {props.children}
        </WeatherContext.Provider>
    )


}