import { createSlice } from "@reduxjs/toolkit";
import { IItem } from "../../../interfaces/item.interface";
import { IObject } from "../../../utils/utils";
// Define a type for the slice state
export type TErrorTypes = "required";

export type TModules = "createItem";

export type TCreateItem = {
  [key in keyof Pick<IItem, "handle">]: boolean;
};

export type TError = TCreateItem | object;

export interface IErrorTypes {
  required: TError;
}
export interface IApplicationErrorHandling {
  createItem: IErrorTypes;
}
export interface ISetErrorActionPayload extends IObject {
  type: TErrorTypes;
  value: TError;
  module: TModules;
}

const DEFAULT_ERROR_TYPE: IErrorTypes = {
  required: {},
};
// Define the initial state using that type
const initialState: IApplicationErrorHandling = {
  createItem: DEFAULT_ERROR_TYPE,
};

export const applicationErrorHandling = createSlice({
  name: "applicationErrorHandling",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setErrorAction: (state, action) => {
      const { type, value, module } = action.payload as ISetErrorActionPayload;
      const error = state[module][type];
      state[module][type] = { ...error, ...value };
    },
    clearErrorAction: (state) => {
      state = initialState;
    },
  },
});

export const { setErrorAction, clearErrorAction } =
  applicationErrorHandling.actions;

// Other code such as selectors can use the imported `RootState` type

export default applicationErrorHandling.reducer;
