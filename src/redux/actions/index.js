export const ACTIONS = {
    SELECTED_CITY : "SELECTED_CITY",
    GET_WEATHER : "GET_WEATHER"
}

export const selectedCityAction = (city) => ({
    type : ACTIONS.SELECTED_CITY,
    payload : city
})

export const getWeatherAction = (city = 'kathmandu')  => {
    return async(dispatch, getState) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=3b9973cf61ca30f5e17a067cbe48bfdc`)
            if(response.ok){
                const data = await response.json()
                console.log(data);
                dispatch({
                    type : ACTIONS.GET_WEATHER,
                    payload : data
                })
            } else {  
                console.log('error geting data')
                return
            }
        } catch (error) {
            
        }
    }
}