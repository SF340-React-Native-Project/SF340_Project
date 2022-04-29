import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk'
import dataReducer from './reducers/dataReducer'
import suggestionReducer from './reducers/suggestionReducer'
import themeReducer from './reducers/themeReducer'
import calendarReducer from './reducers/calendarReducer'


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};


const middleware = [thunk];

const rootReducer = combineReducers({
    data: dataReducer,
    suggest: suggestionReducer,
    theme: themeReducer,
    calendar: calendarReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const Store = createStore(persistedReducer, compose(applyMiddleware(...middleware)));

export const persistor = persistStore(Store);