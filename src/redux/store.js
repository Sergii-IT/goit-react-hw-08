import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/slice';
import { filtersReducer } from './filters/slice';
import { authReducer } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: authReducer,
  },
});



// import { configureStore } from "@reduxjs/toolkit";
// import { contactsReducer } from "./contacts/slice";
// import { filtersReducer } from "./filters/slice";
// import { authReducer } from "./auth/authSlice";

// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { combineReducers } from "redux";
// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";

// const authPersistConfig = {
//   key: "auth",
//   storage,
//   whitelist: ["token"],
// };

// const rootReducer = combineReducers({
//   auth: persistReducer(authPersistConfig, authReducer),
//   contacts: contactsReducer,
//   filters: filtersReducer,
// });

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);
