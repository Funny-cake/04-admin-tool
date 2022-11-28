import { applyMiddleware } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const store = configureStore({
  reducer: rootReducer,
  initialState,
  middleware: [thunk]
});

export default store;