"use client"
import { configureStore } from "@reduxjs/toolkit";
import workspacesReducer from "./workspacesSlice";

const store = configureStore({
  reducer: {
    workspaces: workspacesReducer,
  },
});

export default store;
