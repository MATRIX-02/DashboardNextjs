// store/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
// import counterReducer from './slices/counterSlice'; // Import your slice

// Combine your reducers into a rootReducer
const rootReducer = combineReducers({
//   counter: counterReducer, // Add other slices here
});

export default rootReducer;
