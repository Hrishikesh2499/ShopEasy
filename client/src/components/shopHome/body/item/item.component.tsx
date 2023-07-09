import { Grid, Paper } from "@mui/material";
import { IItem } from "../../../../interfaces/item.interface";
import ErrorBoundary from "../../../common/error-boundary/errorBoundary";
import ImageSection from "./imageSection";
import classes from "./itemStyle";
import NameSection from "./nameSection";
import PriceSection from "./priceSection";

export interface IItemProps {
  item: IItem;
}

const Item = (props: IItemProps) => {
  const displayNameSectionGrid = () => {
    return (
      <Grid item container xs={12} sx={classes.nameSectionGrid}>
        <NameSection {...props} />
      </Grid>
    );
  };

  const displayImageSectionGrid = () => {
    return (
      <Grid item xs={12} sx={classes.imageSectionGrid}>
        <ImageSection {...props} />
      </Grid>
    );
  };

  const priceSectionGrid = () => {
    return (
      <Grid item xs={12} sx={classes.priceSectionGrid}>
        <PriceSection {...props} />
      </Grid>
    );
  };

  return (
    <ErrorBoundary>
      <Paper elevation={3} sx={classes.paper}>
        <Grid
          container
          sx={{ height: "100%" }}
          spacing={2}
          display="flex"
          // flexDirection="column"
        >
          {displayImageSectionGrid()}
          {displayNameSectionGrid()}
          {priceSectionGrid()}
        </Grid>
      </Paper>
    </ErrorBoundary>
  );
};

export default Item;
