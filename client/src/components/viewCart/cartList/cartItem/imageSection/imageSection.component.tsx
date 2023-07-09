import { Grid } from "@mui/material";
import { IItem } from "../../../../../interfaces/item.interface";
import ErrorBoundary from "../../../../common/error-boundary/errorBoundary";
import PriceSection from "../priceSection";
import classes from "./imageSection.styles";
export interface IImageSectionProp {
  item: IItem;
}
const ImageSection = (props: IImageSectionProp) => {
  const { item } = props;
  return (
    <ErrorBoundary>
      <Grid item container display="flex" justifyContent="center" spacing={4}>
        <Grid item>
          <img
            style={{ ...classes.img, textAlign: "center" }}
            src={item.imgSrc}
            srcSet={item.imgSrc}
            loading="lazy"
            alt={item.title}
          />
        </Grid>
        <Grid item>
          <PriceSection {...props} />
        </Grid>
      </Grid>
    </ErrorBoundary>
  );
};

export default ImageSection;
