import { createSlice } from "@reduxjs/toolkit";
import { IItem, TItem } from "../../../interfaces/item.interface";
import { IUser } from "../../../interfaces/user.interface";

interface IUserState {
  user?: IUser;
  cart: IItem[];
}

// Define the initial state using that type
const initialState: IUserState = {
  cart: [],
};

export const UserSlice = createSlice({
  name: "User",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addItemInCart: (state, action) => {
      const item: IItem = action.payload;
      const { cart } = state;
      const cartItem = cart.find((cartItem) => item._id === cartItem._id);
      if (cartItem) {
        cartItem.userSelectedQuantity =
          cartItem.userSelectedQuantity + item.userSelectedQuantity;
      } else {
        cart.push({ ...item, userSelectedQuantity: 0 });
      }
    },
    findAndUpdateCartItemAction: (state, action) => {
      const { name, value, _id } = action.payload;
      const key = name as TItem;
      const item = state.cart.find((item) => item._id === _id);

      if (item) item[key] = value;
    },
    removeFromCartAction: (state, action) => {
      const item: IItem = action.payload;
      const { cart } = state;
      state.cart = cart.filter((cartItem) => item._id !== cartItem._id);
    },
  },
});

export const {
  addItemInCart,
  findAndUpdateCartItemAction,
  removeFromCartAction,
} = UserSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default UserSlice.reducer;
