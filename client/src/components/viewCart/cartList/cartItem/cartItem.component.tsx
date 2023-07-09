import { Grid } from "@mui/material";
import { IItem } from "../../../../interfaces/item.interface";
import ErrorBoundary from "../../../common/error-boundary/errorBoundary";
import ImageSection from "./imageSection";
import NameSection from "./nameSection";

export interface ICartItemProp {
  item: IItem;
}
interface IProp extends ICartItemProp {}
const CartItem = (props: IProp) => {
  return (
    <ErrorBoundary>
      <Grid container xs={8} item display="flex">
        <Grid container item spacing={2}  xs={3}>
          <ImageSection {...props} />
        </Grid>
        <Grid item xs={9}>
          <NameSection {...props} />
        </Grid>
      </Grid>
      <Grid item xs={3}>
        Price Details
      </Grid>
    </ErrorBoundary>
  );
};

export default CartItem;
