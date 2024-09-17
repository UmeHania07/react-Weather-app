
const baseURL = "https://api.weatherapi.com/v1/current.json?key=0ff2a75503e44699b0b163904240505"


export const getWeatherDataForCity = async (city) => {
    //&aqi=yes means k mai yahan pe kisi bhi city ka data fetch krskhti hu
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`)
    return await response.json()
}



//ye user ki current weather bataraha hoga
export const getWeatherDataForLocation = async (lat ,lon) => {
    //&aqi=yes means k mai yahan pe kisi bhi city ka data fetch krskhti hu
    const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`)
    return await response.json()
}