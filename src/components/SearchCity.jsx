import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherAction, removeWeatherDailyAction, selectedCityAction } from "../redux/actions";

function SearchCity() {
    const [query, setQuery] = useState('Lisbon')
    const city =  useSelector(state => state.weatherForecast.city)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getWeatherAction(query))
    },[])

    const handleSearch = async(e) => {
        e.preventDefault()
            dispatch(getWeatherAction(query))
            dispatch(removeWeatherDailyAction())
          
            setQuery('')
        }
    return ( 
        <Form onSubmit={(e) => {handleSearch(e)}}>
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Enter the city name' style={{width:'300px'}}/>
        </Form>
     );
}

export default SearchCity;