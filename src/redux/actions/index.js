export const ACTIONS = {
    SELECTED_CITY : "SELECTED_CITY",
    GET_WEATHER : "GET_WEATHER",
    GET_WEATHER_DETAILS : "GET_WEATHER_DETAIL",
    IS_LOADING : "IS_LOADING"
}

export const selectedCityAction = (city) => ({
    type : ACTIONS.SELECTED_CITY,
    payload : city
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



export const getWeatherHourlyAction = (city = 'lisbon')  => {
  
    return async(dispatch, getState) => {
        try {
            dispatch({
                type : ACTIONS.IS_LOADING,
                payload : true
            })
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast/climate?q=${city}&APPID=3b9973cf61ca30f5e17a067cbe48bfdc`)
            if(response.ok){
                const data = await response.json()
                console.log(data);
                dispatch({
                    type : ACTIONS.GET_WEATHER_DETAILS,
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