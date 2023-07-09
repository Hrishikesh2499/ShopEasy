import { Grid, Typography } from "@mui/material";
import { IItem } from "../../../../../interfaces/item.interface";
import ErrorBoundary from "../../../../common/error-boundary/errorBoundary";
export interface INameSectionProp {
  item: IItem;
}
const NameSection = (props: INameSectionProp) => {
  return (
    <ErrorBoundary>
      <Grid item xs={12}>
        <Typography
          variant="body2"
          fontSize="16px"
          fontWeight="bold"
          textAlign="center"
        >
          {props.item.title || ""}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="body2"
          fontSize="16px"
          fontWeight="bold"
          textAlign="center"
        >
          SKU: {props.item.variant?.sku || ""}
        </Typography>
      </Grid>
    </ErrorBoundary>
  );
};

export default NameSection;
