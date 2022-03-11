import { useEffect, useState } from "react";

function Home() {

    const [weather, setWeather] = useState({})
    const [city, setCity] = useState('Lisbon,Portugal')

    useEffect(() => {
        getWeather()
    },[])
    
    const getWeather = async() => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=3b9973cf61ca30f5e17a067cbe48bfdc`)
            if(response.ok){
                const data = await response.json()
                console.log(data);
                setWeather(data)
            } else {  
                console.log('error geting data')
                return
            }
        } catch (error) {
            
        }
    }

    return ( 
        <div>

        </div>
     );
}

export default Home;