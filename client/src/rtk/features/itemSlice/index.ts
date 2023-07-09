import { createSlice } from "@reduxjs/toolkit";
import {
  IItem,
  IOption,
  IType,
  IVariant,
  IVendor,
  TItem,
} from "../../../interfaces/item.interface";

export type TOpenDialog = "createItem" | "editItem";
type TItemAllProp = string & String & IVendor & IType & IOption[] & IVariant;
export interface IFindAndUpdateItemAction {
  _id: string;
  name: string;
  value: string | number;
}
interface IItemState {
  openDialog?: TOpenDialog;
  item: IItem;
  items: IItem[];
  searchText: string;
}
const DEFAULT_LAB: IItem = {
  handle: "",
  userSelectedQuantity: 0,
};

// Define the initial state using that type
const initialState: IItemState = {
  item: DEFAULT_LAB,
  items: [],
  searchText: "",
};

export const ItemSlice = createSlice({
  name: "Item",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setOpenDialogAction: (state, action) => {
      state.openDialog = action.payload;
    },
    setItemsAction: (state, action) => {
      state.items = action.payload;
    },
    setItemAction: (state, action) => {
      state.item = action.payload;
    },
    updateItemAction: (state, action) => {
      const { name, value } = action.payload;
      const { item } = state;
      const keys = name.split(".");
      keys.reduce((item: IItem, key: string, index: number) => {
        const typeKey = key as TItem;
        if (index === keys.length - 1) {
          item[typeKey] = value;
        } else if (!item[typeKey]) {
          item[typeKey] = {} as TItemAllProp;
        }
        return item[typeKey];
      }, item);

      // state.item[key as TItem] = value;
    },
    clearItemAction: (state) => {
      state.item = DEFAULT_LAB;
    },
    closeDialogAction: (state) => {
      state.openDialog = undefined;
      state.item = DEFAULT_LAB;
    },
    findAndUpdateItemAction: (state, action) => {
      const { name, value, _id } = action.payload;
      const key = name as TItem;
      const item = state.items.find((item) => item._id === _id);

      if (item) item[key] = value;
    },
    updateSearchTextAction: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const {
  setOpenDialogAction,
  clearItemAction,
  setItemAction,
  setItemsAction,
  updateItemAction,
  closeDialogAction,
  findAndUpdateItemAction,
  updateSearchTextAction
} = ItemSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default ItemSlice.reducer;
