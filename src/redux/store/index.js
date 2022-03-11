import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import thunk from "redux-thunk";
import weatherForecastReducer from "../reducers/weatherForecastReducer";

export const initialState = {
    weatherForecast :{
        city : 'Lisbon,Portugal',
        weather : {},
        days : [],
    }
}

const persistConfig = {
    key: "root",
    storage,
  };

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const mainReducer = combineReducers({
      weatherForecast:weatherForecastReducer
  })

  const persistedReducer = persistReducer(persistConfig, mainReducer);

  const configStore = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  )

  const persistor = persistStore(configStore)

export {configStore, persistor}