import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./slices/counter";
import AddNewCollegeStepReducer from "./slices/add-new-college-step-form";

export const store = configureStore({
  reducer: AddNewCollegeStepReducer,

  // reducer: {
  //   counter: counterReducer,
  // },
});
