import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import { persistStore, persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import thunk from "redux-thunk";
import weatherForecastReducer from "../reducers/weatherForecastReducer";
import storage from "redux-persist/lib/storage";
import dailyWeatherReducer from "../reducers/dailyWeatherReducer";

export const initialState = {
    weatherForecast :{
        city : '',
        weather : {},
        isLoading : false,
    },
    dailyWeather : {
        dailyLoader : true,
        detailWeather:{}
    },
}

const persistConfig = {
    key: "root",
    storage,
    // transform : [
    //     encryptTransform({
    //         secretKey : process.env.REACT_APP_SECRET_PERSIST_KEY,
             
    //     })
    // ]
  };

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const mainReducer = combineReducers({
      weatherForecast:weatherForecastReducer,
      dailyWeather : dailyWeatherReducer
  })

  const persistedReducer = persistReducer(persistConfig, mainReducer);

  const configStore = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  )

  const persistor = persistStore(configStore)

export {configStore, persistor}