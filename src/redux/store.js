import { configureStore } from '@reduxjs/toolkit';
import {contactsApi} from './contactsApi'
import { setupListeners } from '@reduxjs/toolkit/query';
import contactsSlice from "./contactsSlice";

const store = configureStore({
  reducer: {
    filter: contactsSlice.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

setupListeners(store.dispatch)

export default store;

