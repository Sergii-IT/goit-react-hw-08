import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage
import { combineReducers } from 'redux';

import { authReducer } from './auth/authSlice';
import { contactsReducer } from './contacts/slice';
import { filtersReducer } from './filters/slice';

// 👉 Конфіг для auth
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'], // тільки token буде збережено
};

// 👉 Створення root reducer
const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  contacts: contactsReducer,
  filters: filtersReducer,
});

// 👉 Створення store
export const store = configureStore({
  reducer: rootReducer,

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// 👉 Persistor
export const persistor = persistStore(store);



