import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import ReduxThunk from 'redux-thunk';

import rootReducer from 'reducers';
 
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['pos', 'server', 'cmenu', 'settings'] 
};
 
const persistedReducer = persistReducer(persistConfig, rootReducer);
 
export default () => {
  const store = createStore(persistedReducer, {}, applyMiddleware(ReduxThunk));
  const persistor = persistStore(store);
  return { store, persistor };
};
