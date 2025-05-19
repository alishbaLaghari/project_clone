import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetching: false, // Fix typo (currentlyfetching → currentlyFetching)
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true; // Direct mutation via Immer
    },
    fetchingStarted: (state) => {
      state.currentlyFetching = true;
    },
    fetchingFinished: (state) => {
      state.currentlyFetching = false;
    },
  },
});

export const fetchActions = fetchStatusSlice.actions;
export default fetchStatusSlice;
