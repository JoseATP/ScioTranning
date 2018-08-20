import { persistStore, persistReducer } from 'redux-persist'
/*PersistStore sets up a listener that will continuously saves newly changed state to storage.
persistReducer is notified of the changes that happens in the store.*/
import { createStore, applyMiddleware } from 'redux';
import { AsyncStorage } from 'react-native';
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import rootReducer from '../Reducers/index';

/*Configuracion */
const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)



export const store = createStore(
    persistedReducer,
    applyMiddleware(thunk)
);

export const persistor = persistStore(store);
