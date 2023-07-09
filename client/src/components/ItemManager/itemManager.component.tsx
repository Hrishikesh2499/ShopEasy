import { Box } from "@mui/material";
import ErrorBoundary from "../common/error-boundary/errorBoundary";
import CreateItem from "./createItem";
import ItemGrid from "./grid";
import classes from "./itemManager.styles";
import ItemUtility from "./utility";
const ItemManager = () => {
  return (
    <ErrorBoundary>
      <Box sx={classes.box}>
        <ItemUtility />
        <ItemGrid />
        <CreateItem />
      </Box>
    </ErrorBoundary>
  );
};

export default ItemManager;
