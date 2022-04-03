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

const reducers = combineReducers({
    data: persistReducer(persistConfig, dataReducer),
    suggest: persistReducer(persistConfig, suggestionReducer),
    theme: persistReducer(persistConfig, themeReducer),
    calendar: persistReducer(persistConfig, calendarReducer),
})

export const Store = createStore(reducers, compose(applyMiddleware(...middleware)));

export const persistor = persistStore(Store);