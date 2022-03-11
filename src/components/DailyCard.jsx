import { Col } from "react-bootstrap";

function DailyCard({day}) {
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
        <Col>
        <div className="bg-dark text-light p-2 mt-3" style={{fontSize:'15px', minHeight:'250px'}}>
            <div>{day.dew_point}</div>
            <div>{day.humidity}</div>
            <div>{day.moon_phase}</div>
            <div>{day.moonrise}</div>
            <div>{day.moonset}</div>
            <div>{day.pressure}</div>
            <div>{day.sunrise}</div>
            <div>{day.sunset}</div>
            <div>{day.temp.day}</div>
            <div>{day.temp.min}</div>
            <div>{day.temp.max}</div>
            <div>{day.temp.night}</div>
            <div>{day.temp.eve}</div>
            <div>{day.wind_speed}</div>
        </div>
        </Col>
     );
}

export default DailyCard;