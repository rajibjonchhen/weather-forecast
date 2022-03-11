import { Alert, Col, Container, Row } from "react-bootstrap";
import {BsSunrise, BsSunset, BsArrowUp} from 'react-icons/bs'
import {WiDegrees} from 'react-icons/wi'
import {BiLeftArrow} from 'react-icons/bi'
import { useSelector } from "react-redux";
import Loader from "./Loader";

function DetailWeather({setShowDetail, showDetail}) {

    const weather =  useSelector(state => state.weatherForecast.weather)
    const isLoading =  useSelector(state => state.weatherForecast.isLoading)

    return ( 
        <Container style={{display:showDetail? 'block':'none'}}>
        <div className='text-white d-flex align-items-center' onClick={() => setShowDetail(false)}> <BiLeftArrow/>Back</div>
        <Row>
                <Col>
                      <div className="bg-dark text-light p-2 mt-3" style={{fontSize:'15px', minHeight:'250px'}}>
                        <p className="h3 mb-3">Current Weather Detail {weather.name}</p>
                        {/* <p>{Date().toLocaleString()}</p> */}

                        {isLoading? (<Loader/>) : weather !== {}?    
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
                                    <div className='weather-item d-flex justify-content-between'> <span>Feels Like</span> <span>{weather.main.feels_like} <WiDegrees/>C</span></div>
                                    <div className='weather-item d-flex justify-content-between'> <span>Humidity</span> <span>{weather.main.humidity}%</span></div>
                                    <div className='weather-item d-flex justify-content-between'> <span>Pressure </span> <span><BsArrowUp/>{weather.main.pressure}mb</span></div>
                                    <div className='weather-item d-flex justify-content-between'><span>rain</span> <span>{} km/hr</span></div>
                                    <div className='weather-item d-flex justify-content-between'><span>Wind</span> <span>{weather.wind.speed} km/hr</span></div>
                                    <div className='weather-item d-flex justify-content-between'><span>visibility</span> <span>{weather.visibility}km</span></div>
                                </Col>
                            </Row>
                        </Container>
                    : <Alert variant="danger">Could not find the weather for the city</Alert>}
                    </div> 
                </Col>
               
           </Row>
        </Container>
     );
}

export default DetailWeather;