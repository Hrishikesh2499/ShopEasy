import {
  Badge,
  Button,
  ButtonGroup,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import ErrorBoundary from "../../../../common/error-boundary/errorBoundary";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import MinIcon from "@mui/icons-material/Remove";
import { IItem } from "../../../../../interfaces/item.interface";
import classes from "./priceSection.styles";

export interface IPriceSectionProps {
  item: IItem;
}

interface IProp extends IPriceSectionProps {
  onClick: React.FormEventHandler<HTMLButtonElement> | undefined;
}

const PriceSection = (props: IProp) => {
  const displayPriceGrid = () => {
    return (
      <Grid
        item
        xs={4}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="body2" fontSize="16px" fontWeight="bold">
          ${props.item.variant?.price || ""}
        </Typography>
      </Grid>
    );
  };

  const displayAddToCartGrid = () => {
    return (
      <Grid item xs={7} display="flex" justifyContent="end" alignItems="center">
        <ButtonGroup
          size="small"
          variant="contained"
          color="inherit"
          aria-label="outlined primary button group"
        >
          <IconButton id="addUserSelectedQuantity" onClick={props.onClick}>
            <AddIcon />
          </IconButton>
          <Badge
            sx={classes.badge}
            badgeContent={props.item.userSelectedQuantity}
            color="secondary"
          >
            <ShoppingCartIcon color="secondary" />
          </Badge>
          <IconButton id="subUserSelectedQuantity" onClick={props.onClick}>
            <MinIcon />
          </IconButton>
        </ButtonGroup>
      </Grid>
    );
  };

  const displayAddToCart = () => {
    return (
      <Grid
        item
        xs={12}
        display="flex"
        sx={classes.addToCartGrid}
        alignItems="center"
      >
        <Button fullWidth id="addToCart" variant="contained" color="secondary" onClick={props.onClick}>
          Add To Cart
        </Button>
      </Grid>
    );
  };
  return (
    <ErrorBoundary>
      <Grid item container spacing={2}>
        {displayPriceGrid()}
        {displayAddToCartGrid()}
        {displayAddToCart()}
      </Grid>
    </ErrorBoundary>
  );
};

export default PriceSection;
