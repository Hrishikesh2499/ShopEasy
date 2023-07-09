import { Grid } from "@mui/material";
import { IItem } from "../../../interfaces/item.interface";
import ErrorBoundary from "../../common/error-boundary/errorBoundary";
import CartItem from "./cartItem";
import classes from "./cartList.styles";
interface IProp {
  cart: IItem[];
}
const CartList = (props: IProp) => {
  const displayCartItemGrid = () => {
    return props.cart.map((cartItem) => (
      <Grid
        container
        display="flex"
        sx={classes.grid}
        justifyContent="center"
        alignItems="center"
      >
        <CartItem item={cartItem} />
      </Grid>
    ));
  };
  return <ErrorBoundary>{displayCartItemGrid()}</ErrorBoundary>;
};

export default CartList;
