import { createSlice } from "@reduxjs/toolkit"; // import function from toolkit library

import { CAMPSITES } from "../../app/shared/CAMPSITES";

const initialState = {
  // setup initialState object that will pass to createSlice
  campsitesArray: CAMPSITES, //set single property name campsitesArray
};

const campsitesSlice = createSlice({
  //set this equal to object that's returned from calling createSlice
  name: "campsites", //need to pass data to createSlice in the form of an object with two properties
  initialState, // since key and object name for value are the same, we can just write object once
});

export const campsitesReducer = campsitesSlice.reducer; //export as function

export const selectAllCampsites = () => {
  return CAMPSITES;
};

export const selectCampsiteById = (id) => {
  return CAMPSITES.find((campsite) => campsite.id === parseInt(id));
};

export const selectFeaturedCampsite = () => {
  return CAMPSITES.find((campsite) => campsite.featured);
};

// export const selectRandomCampsite = () => {
//     return CAMPSITES [Math.floor(CAMPSITES.length * Math.random())];
// };
