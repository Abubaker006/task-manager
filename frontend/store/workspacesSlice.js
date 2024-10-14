"use client"
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  workspaces: [],
};

const workspacesSlice = createSlice({
  name: "workspaces",
  initialState,
  reducers: {
    setWorkspaces: (state, action) => {
      state.workspaces = action.payload;
    },
    addWorkspace: (state, action) => {
      state.workspaces.push(action.payload);
    },
    updateWorkspace: (state, action) => {
      const index = state.workspaces.findIndex(
        (workspace) => workspace._id === action.payload._id
      );
      if (index !== -1) {
        state.workspaces[index] = action.payload;
      }
    },
    deleteWorkspace: (state, action) => {
      state.workspaces = state.workspaces.filter(
        (workspace) => workspace._id !== action.payload
      );
    },
  },
});

export const { setWorkspaces, addWorkspace, updateWorkspace, deleteWorkspace } = workspacesSlice.actions;
export default workspacesSlice.reducer;
