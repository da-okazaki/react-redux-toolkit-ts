import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import { counterSlice, CounterState } from "./counter";
import { logSlice, LogState } from "./log";

export type AppState = {
  counter: CounterState;
  log: LogState;
};

// rootReducer で 各reducerを統合する
const rootReducer = combineReducers<AppState>({
  counter: counterSlice.reducer,
  log: logSlice.reducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
