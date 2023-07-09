import { createAsyncThunk } from "@reduxjs/toolkit";
import { batch } from "react-redux";
import { IItem } from "../../interfaces/item.interface";
import { TResponse } from "../../interfaces/response.interface";
import {
  createItemService,
  deleteItemService,
  getAllItemsService,
  updateItemService,
} from "../../services/item.services";
import { closeDialogAction } from "../features/itemSlice";
import { setItemsAction } from "../features/itemSlice";
import { openSnackBar } from "../features/snackBarSlice";
import { setSpinner } from "../features/spinnerSlice";

const getAllItemsAsync = createAsyncThunk<TResponse>(
  "item/fetchAllItem",
  // Declare the type your function argument here:
  async (_, { dispatch }) => {
    dispatch(setSpinner(true));
    const response = await getAllItemsService();
    if (response.status === 200) {
      dispatch(setItemsAction(response.data || []));
      dispatch(openSnackBar({ message: response.message, variant: "success" }));
      dispatch(setSpinner(false));
      return response;
    }
    dispatch(setSpinner(false));
    dispatch(openSnackBar({ message: response.message, variant: "error" }));
    return response;
  }
);

const createItemAsync = createAsyncThunk<TResponse, IItem>(
  "item/createItem",
  // Declare the type your function argument here:
  async (payload, { dispatch }) => {
    dispatch(setSpinner(true));
    const response = await createItemService(payload);
    if (response.status === 200) {
      batch(() => {
        dispatch(setItemsAction(response.data || []));
        dispatch(
          openSnackBar({ message: response.message, variant: "success" })
        );
        dispatch(closeDialogAction());
        dispatch(setSpinner(false));
      });
      return response;
    }
    dispatch(setSpinner(false));
    dispatch(openSnackBar({ message: response.message, variant: "error" }));
    return response;
  }
);

const updateItemAsync = createAsyncThunk<TResponse, IItem>(
  "item/updateItem",
  // Declare the type your function argument here:
  async (payload, { dispatch }) => {
    dispatch(setSpinner(true));
    const response = await updateItemService(payload);
    if (response.status === 200) {
      batch(() => {
        dispatch(setItemsAction(response.data || []));
        dispatch(closeDialogAction());
        dispatch(
          openSnackBar({ message: response.message, variant: "success" })
        );
        dispatch(setSpinner(false));
      });

      return response;
    }
    dispatch(setSpinner(false));
    dispatch(openSnackBar({ message: response.message, variant: "error" }));
    return response;
  }
);

const deleteItemAsync = createAsyncThunk<TResponse, number>(
  "item/deleteItem",
  // Declare the type your function argument here:
  async (payload, { dispatch }) => {
    dispatch(setSpinner(true));
    const response = await deleteItemService(payload);
    if (response.status === 200) {
      dispatch(setItemsAction(response.data || []));
      dispatch(openSnackBar({ message: response.message, variant: "success" }));
      dispatch(setSpinner(false));
      return response;
    }
    dispatch(setSpinner(false));
    dispatch(openSnackBar({ message: response.message, variant: "error" }));
    return response;
  }
);
export { getAllItemsAsync, createItemAsync, updateItemAsync, deleteItemAsync };
