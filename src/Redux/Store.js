import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import themeReducer from './ThemeSlice'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const rootReducer = combineReducers({
    // ui: uiReducer,
    // user: userReducer,
    // bag: bagReducer,
    theme: themeReducer,
    // wishlist: wishlistReducer,
    // address: addressReducer,
    // notification: notificationReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

// uncomment this to user persist
export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
})
export const persistor = persistStore(store);

// uncomment this to not use persist
// export const store = configureStore({
//     reducer: rootReducer,
//     middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//         serializableCheck: false,
//     }),
// })