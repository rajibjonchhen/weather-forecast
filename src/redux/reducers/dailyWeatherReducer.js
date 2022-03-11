import { ACTIONS } from "../actions"
import { initialState } from "../store"

const dailyWeatherReducer = (state = initialState.dailyWeather, action) => {

switch (action.type){
    


        case ACTIONS.DAILYLOADER:
            return{
                ...state,
                    dailyLoader : action.payload
                
            }

        case ACTIONS.IS_ERROR_DAY:
            return{
                ...state,
                    isErrorDay : action.payload
                
            }

        case ACTIONS.GET_WEATHER_DAILY:
            return {
                ...state,
                    detailWeather : action.payload
            }

        case ACTIONS.ROMOVE_WEATHER_DAILY:
            return {
                ...state,
                    detailWeather : null
            }

    default: return state

}
}

export default dailyWeatherReducer