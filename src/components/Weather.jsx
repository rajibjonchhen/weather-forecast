import { Alert, Col, Container, Row } from "react-bootstrap";
import {BsArrowRightCircleFill, BsArrowUp} from 'react-icons/bs'
import {WiDegrees} from 'react-icons/wi'
import { useSelector } from "react-redux";
import Loader from "./Loader";
import SearchCity from "./SearchCity";

function Weather({setShowDetail, showDetail}) {

    const weather =  useSelector(state => state.weatherForecast.weather)
    const isLoading =  useSelector(state => state.weatherForecast.isLoading)
    const isError =  useSelector(state => state.weatherForecast.isError)

    return ( 
        <Container style={{display:!showDetail? 'block':'none',  borderRadius:'10px'}}>
            <SearchCity/>
            
            <Row>
                <Col>
            {isLoading? (<Loader/>) : (isError && weather === {})? <Alert variant='danger' >{isError}</Alert> : weather.name &&
                      <div className="bg-dark text-light p-2 mt-3" style={{fontSize:'15px', minHeight:'250px'}}>
                        <p className="h3 mb-3">Current Weather {weather.name}</p>
                        <p>{Date().toLocaleString()}</p>
                            <Container>
                                <Row>
                                    <Col >
                                    <div className="d-flex justify-content-around">
                                        <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt='type of weather'/> 
                                        
                            
                                        <p className='text-white h1'> {weather.main.temp} 
                                        <WiDegrees/>
                                        <span className='h3'>
                                            C
                                            </span>
                                            </p>
                                        <div >
                                            <div className='text-left'>Max {weather.main.temp_max}<WiDegrees/>C</div>
                                            <div className='text-left'>Min {weather.main.temp_min}<WiDegrees/>C</div>
                                        </div>
                                    </div>
                                        {weather.weather.map((w,i) =>
                                    <div  key={i} className='weather-item'>
                                    {w.main} ({w.description})
                                    </div>
                                        )}
                                    </Col>
                                    <Col>
                                        <div className='weather-item'> <span>Feels Like</span> <span>{weather.main.feels_like} <WiDegrees/>C</span></div>
                                        <div className='weather-item'> <span>Humidity</span> <span>{weather.main.humidity}%</span></div>
                                        <div className='weather-item'> <span>Pressure </span> <span><BsArrowUp/>{weather.main.pressure}mb</span></div>
                                    </Col>
                                </Row>
                                <Row className="mt-3">
                                    <Col>
                                    
                                    
                                    </Col>
                                    <Col className="text-right mt-3">
                                        <div onClick={()=> setShowDetail(true)}>More Details <BsArrowRightCircleFill/></div>
                                    </Col>

                                </Row>
                            </Container>
                    </div> 
            }
                </Col>
               
           </Row>
        </Container>
     );
}

export default Weather;