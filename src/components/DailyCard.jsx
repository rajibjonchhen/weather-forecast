import { Col } from "react-bootstrap";

function DailyCard({day}) {
    
    const myArray = [
        {
            title: 'Dew_point',
            value: day.dew_point
        },
        {
            title: 'Dumidity',
            value: day.humidity
        },
        {
            title: 'Wind Speed',
            value: day.wind_speed
        },
        {
            title: 'Moon Phase',
            value: day.moon_phase
        },
        {
            title: 'Moon Rise',
            value: day.moonrise
        },
        {
            title: 'Moon Set',
            value: day.moonset
        },
        {
            title: 'Pressure',
            value: day.pressure
        },
        {
            title: 'Sun Rise',
            value: day.sunrise
        },
        {
            title: 'Sunset',
            value: day.sunset
        },
        {
            title: 'Day Temperature',
            value: day.temp.day
        },
        {
            title: 'Night Temperature',
            value: day.temp.night
        },
        {
            title: 'Evening Temperature',
            value: day.temp.eve
        },
    ]
    return ( 
//         clouds: 98
// dew_point: 280.37
// dt: 1647000000
// feels_like: {day: 287.4, night: 283.88, eve: 285.77, morn: 285.91}
// humidity: 59
// moon_phase: 0.28
// moonrise: 1646999760
// moonset: 1646966580
// pop: 1
// pressure: 1017
// rain: 1.33
// sunrise: 1646981663
// sunset: 1647023940
// temp: {day: 288.29, min: 284.69, max: 288.76, night: 284.69, eve: 286.55, …}
// uvi: 3.24
// weather: [{…}]
// wind_deg: 232
// wind_gust: 12.75
// wind_speed: 7.34
        <Col sm={6} md={4} lg={3} xl={3}>
        <div className="bg-dark text-light p-2 mt-3" style={{fontSize:'15px', minHeight:'250px'}}>
           {myArray?.map(item => 
           <div className='daily-weather-list'>
                <div>
                    {item.title}
                </div>
                <div>
                    {item.value}
                </div>
            </div>)}
        </div>
        </Col>
     );
}

export default DailyCard;