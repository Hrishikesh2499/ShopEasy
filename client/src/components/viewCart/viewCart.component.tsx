import { Box } from "@mui/material";
import CartList from "./cartList";
import classes from "./viewCart.styles"
const ViewCart = () => {
  return (
    <Box sx={classes.box}>
      <CartList />
    </Box>
  );
};

export default ViewCart;
