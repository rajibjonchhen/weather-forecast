import { ACTIONS } from "../actions"
import { initialState } from "../store"

const weatherForecastReducer = (state = initialState.weatherForecast, action) => {

switch (action.type){
    case ACTIONS.SELECTED_CITY:
        return{
            ...state,
            city : action.payload
        }

    case ACTIONS.GET_WEATHER:
        return {
            ...state,
            weather : action.payload
        }

    default: return state

}
}

export default weatherForecastReducer