import ErrorBoundary from "../common/error-boundary/errorBoundary";
import { Box, Link, Typography } from "@mui/material";
import classes from "./shopHome.styles";
import Body from "./body";
import ShopHomeUtility from "./utility";
import { useNavigate } from "react-router-dom";

const ShopHome = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/itemManager");
  };
  return (
    <ErrorBoundary>
      <Box sx={classes.box}>
        <ShopHomeUtility />
        <Body />
      </Box>
      <Box display="flex" justifyContent="center">
        <Link href="#" onClick={onClick}>
          <Typography fontWeight="bold">Link To Item Manager</Typography>
        </Link>
      </Box>
    </ErrorBoundary>
  );
};

export default ShopHome;
