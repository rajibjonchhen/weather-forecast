import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import {BsSunrise, BsSunset, BsArrowUp} from 'react-icons/bs'
import {WiDegrees} from 'react-icons/wi'
import {BiLeftArrow} from 'react-icons/bi'
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import DailyCard from "./DailyCard";
import { getWeatherDailyAction } from "../redux/actions";
import { useState } from "react";

function DetailWeather({setShowDetail, showDetail}) {

    const [showDailyWeather, setShowDailyWeather] = useState(false)
    const weather =  useSelector(state => state.weatherForecast.weather)
    const dailyWeather =  useSelector(state => state.dailyWeather.detailWeather)
    const dailyWeatherLoading =  useSelector(state => state.dailyWeather.dailyLoader)
    const isLoading =  useSelector(state => state.weatherForecast.isLoading)
    const isError =  useSelector(state => state.weatherForecast.isErrror)

    const dispatch = useDispatch()
        
    return ( 
        <Container style={{display:showDetail? 'block':'none'}}>
                        <p className="h3 mb-3">Current Weather Detail {weather.name}</p>
        <div className='text-white d-flex align-items-center' onClick={() => setShowDetail(false)}> <BiLeftArrow/>Back</div>
                        <p>{Date().toLocaleString()}</p>
        <Row>
                <Col>
                      <div className="bg-dark text-light p-2 mt-3" style={{fontSize:'15px', minHeight:'250px'}}>

                        {isLoading? <Loader/> : isError? <Alert variant="danger">{isError}</Alert> : weather &&    
                        <Container>
                            <Row>
                                <Col>
                                <div className="d-flex flex-column align-items-center">
                                    <p className='text-white h3'> {weather.main.temp}</p>
                                    <div className="d-flex justify-content-around">
                                    <div className='text-left'>Max {weather.main.temp_max}<WiDegrees/>C</div>
                                    <div className='text-left'>Min {weather.main.temp_min}<WiDegrees/>C</div>
                                    </div>
                                    <div className='weather-item d-flex justify-content-between'> 
                                    <span><BsSunrise/> Sunrise : </span> <span>{weather.sys.sunrise}
                                    </span></div>
                                    <div className='weather-item d-flex justify-content-between'> 
                                        <span>
                                            <BsSunset/> Sunrise :
                                        </span> 
                                        <span>
                                            {weather.sys.sunset}
                                        </span>
                                    </div>
                                    <div className='weather-item d-flex justify-content-between'>
                                        <span>Cloud</span> 
                                        <span>{weather.clouds.all}%</span>
                                    </div>
                                </div>
                               
                                </Col>
                                <Col>
                                    <div className='weather-item'> <span>Feels Like</span> <span>{weather.main.feels_like} <WiDegrees/>C</span></div>
                                    <div className='weather-item'> <span>Humidity</span> <span>{weather.main.humidity}%</span></div>
                                    <div className='weather-item'> <span>Pressure </span> <span><BsArrowUp/>{weather.main.pressure}mb</span></div>
                                    <div className='weather-item'><span>rain</span> <span>{} km/hr</span></div>
                                    <div className='weather-item'><span>Wind</span> <span>{weather.wind.speed} km/hr</span></div>
                                    <div className='weather-item'><span>visibility</span> <span>{weather.visibility}km</span></div>
                                </Col>
                            </Row>
                        </Container>
                    }
                    </div> 
                </Col>
           </Row>
           <Row>
                <Col className='mt-2'>
                {weather !=={} && <Button variant="secondary" onClick={() => {dispatch(getWeatherDailyAction(weather.coord.lat,weather.coord.lon,3)); setShowDailyWeather(true)}}>Show Daily Weather</Button>}
                </Col>
           </Row>

            <Container style={{display:showDailyWeather? 'block':'none'}} >
            <Row >
                { dailyWeatherLoading?  <Loader/> : dailyWeather.daily.length>0 && dailyWeather?.daily.map((day,i) =><DailyCard key={i} day={day}/>)}
            </Row>
            </Container>
        </Container>
     );
}

export default DetailWeather;