import { Grid } from "@mui/material";
import { IItem } from "../../../interfaces/item.interface";
import ErrorBoundary from "../../common/error-boundary/errorBoundary";
import classes from "./body.styles";
import Item from "./item";
interface IProp {
  items: IItem[];
}
const Body = (props: IProp) => {
  const displayItems = () => {
    return props.items.map((item) => {
      return (
        <Grid item sx={{ height: "50vh", width: "100%" }} xs={2}>
          <Item item={item} />
        </Grid>
      );
    });
  };

  return (
    <ErrorBoundary>
      <Grid container sx={classes.grid} spacing={2}>
        {displayItems()}
      </Grid>
    </ErrorBoundary>
  );
};

export default Body;
