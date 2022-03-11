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
        // {
        //     title: 'Moon Phase',
        //     value: day.moon_phase
        // },
        // {
        //     title: 'Moon Rise',
        //     value: day.moonrise
        // },
        // {
        //     title: 'Moon Set',
        //     value: day.moonset
        // },
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
        // {
        //     title: 'Evening Temperature',
        //     value: day.temp.eve
        // },
    ]
    return ( 

        <Col sm={6} md={4} lg={3} xl={3} >
        <div className="bg-dark text-light p-2 mt-3" style={{fontSize:'15px', minHeight:'250px'}}>
           {myArray?.map((item,i) => 
           <div key={i} className='daily-weather-list'>
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