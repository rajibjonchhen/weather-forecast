export const ACTIONS = {
    SELECTED_CITY : "SELECTED_CITY",
    GET_WEATHER : "GET_WEATHER",
    GET_WEATHER_DAILY : "GET_WEATHER_DAILY",
    ROMOVE_WEATHER_DAILY : "ROMOVE_WEATHER_DAILY",
    IS_LOADING : "IS_LOADING",
    DAILYLOADER : "DAILYLOADER",

}

export const selectedCityAction = (city) => ({
    type : ACTIONS.SELECTED_CITY,
    payload : city
})
export const removeWeatherDailyAction = () => ({
    type : ACTIONS.SELECTED_CITY,
})

export const getWeatherAction = (city = 'lisbon')  => {
    return async(dispatch, getState) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&APPID=3b9973cf61ca30f5e17a067cbe48bfdc`)
            if(response.ok){
                const data = await response.json()
                console.log(data);
                dispatch({
                    type : ACTIONS.GET_WEATHER,
                    payload : data
                })
                dispatch({
                    type : ACTIONS.IS_LOADING,
                    payload : false

                })
            } else {  
                console.log('error geting data')
                dispatch({
                    type : ACTIONS.IS_LOADING,
                    payload : false

                })
                return
            }
        } catch (error) {
            console.log(error)
            dispatch({
                type : ACTIONS.IS_LOADING,
                payload : false

            })
        }
    }
}



export const getWeatherDailyAction = (lat, lon, cnt)  => {
  
    return async(dispatch, getState) => {
        try {
            dispatch({
                type : ACTIONS.DAILYLOADER,
                payload : true
            })
            const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&APPID=3b9973cf61ca30f5e17a067cbe48bfdc`)
            if(response.ok){
                const data = await response.json()
                console.log(data);
                dispatch({
                    type : ACTIONS.GET_WEATHER_DAILY,
                    payload : data
                })
                dispatch({
                    type : ACTIONS.DAILYLOADER,
                    payload : false

                })
            } else {  
                console.log('error getting data')
                dispatch({
                    type : ACTIONS.DAILYLOADER,
                    payload : false

                })
                return
            }
        } catch (error) {
            console.log(error)
            dispatch({
                type : ACTIONS.DAILYLOADER,
                payload : false

            })
        }
    }
}