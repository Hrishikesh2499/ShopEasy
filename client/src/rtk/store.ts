import { configureStore, combineReducers } from "@reduxjs/toolkit";
import snackBarReducer from "./features/snackBarSlice";
import spinnerReducer from "./features/spinnerSlice";
import errorHandlerReducer from "./features/errorSlice";
import itemReducer from "./features/itemSlice";
import userReducer from "./features/userSlice";

// ...
const reducers = combineReducers({
  snackBar: snackBarReducer,
  spinner: spinnerReducer,
  errorHandler: errorHandlerReducer,
  item: itemReducer,
  user: userReducer,
});
const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
