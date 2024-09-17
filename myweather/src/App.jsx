import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';
import Input from './Components/Input';
import Button from './Components/Button';
import { useWeather} from './Context/Weather'
import { useEffect } from 'react';




function App() {

  const weather = useWeather()
  console.log(weather)


  useEffect(()=> {
    //get current location of user
    weather.fetchCurrentLocationUserData()
  } ,[])
  
  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Input />
      <Button  onClick={weather.fetchData} value="Search"  />
      <Card />
      <Button value="Refresh"/>
    </div>
  );
}

export default App;
