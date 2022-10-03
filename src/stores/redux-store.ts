import { configureStore } from "@reduxjs/toolkit";
import { reducer } from '../reducers/redux-reducer';

export const store = configureStore({
  reducer
});
