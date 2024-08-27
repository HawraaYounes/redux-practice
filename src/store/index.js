import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCount: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggle(state) {
      state.showCount = !state.showCount;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer
});

export default store;
