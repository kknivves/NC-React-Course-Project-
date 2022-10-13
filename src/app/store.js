import { configureStore } from "@reduxjs/toolkit";
//REPLACE***
//import counterReducer from '../features/counter/counterSlice'; This was jsut ex. code that comes with Redux template
import { campsitesReducer } from "../features/campsites/campsitesSlice";

export const store = configureStore({
  reducer: {
    counter: campsitesReducer,
  },
});
