import { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ACTIONS, getWeatherAction, selectedCityAction } from "../redux/actions";

function Home() {

const city =  useSelector(state => state.weatherForecast.city)
const weather =  useSelector(state => state.weatherForecast.weather)
const dispatch = useDispatch()

console.log("city",city);
console.log("weather",weather);
    useEffect(() => {
        dispatch(selectedCityAction("Lisbon,Portugal"))
        // dispatch(getWeatherAction(city))
        // getWeather(city)
    },[])
    
    const handleSearch = (city) => {
        getWeather(city)
    }
    const getWeather = async() => {
        
    }

    return ( 
       <Container>
           <Row>
                <Col>
                    {weather && <div className="bg-dark text-light" style={{fontSize:'12px'}}>
                        <Form onSubmit={() => {handleSearch()}}>
                            <Form.Control/>
                        </Form>
                        <p>Current Weather</p>
                        <p>{Date().toLocaleString()}</p>
                        <p className='text-white'> City : {weather.name}</p>
                        <p className='text-white'> Sunrise : {weather.sys.sunrise}</p>
                        
                        <p className='text-white'> Sunrise : {weather.sys.sunset}</p>
                        
                        <p className='text-white'>Feels Like {weather.main.feels_like}</p>
                        <p className='text-white'>Humidity {weather.main.humidity}</p>
                        <p className='text-white'>Pressure {weather.main.pressure}</p>
                        <p className='text-white'>Temperature {weather.main.temp}</p>
                        <p className='text-white'>Max {weather.main.temp_max}</p>
                        <p className='text-white'>Min {weather.main.temp_min}</p>
                        <p className='text-white'>visibility {weather.visibility}</p>
                    </div>}
                </Col>
                <Col>
                </Col>
           </Row>
       </Container>
     );
}

export default Home;