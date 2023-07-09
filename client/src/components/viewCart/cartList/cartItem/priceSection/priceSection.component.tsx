import {
  Badge,
  ButtonGroup,
  Grid,
  IconButton,
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

  const displayAddToCartGrid = () => {
    return (
      <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
        <ButtonGroup
          size="large"
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

  return (
    <ErrorBoundary>
      <Grid item container>
        {displayAddToCartGrid()}
      </Grid>
    </ErrorBoundary>
  );
};

export default PriceSection;
