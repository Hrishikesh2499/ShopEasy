import { AppBar, Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import ErrorBoundary from "../../common/error-boundary/errorBoundary";
import classes from "./header.styles";
const Header = () => {
  return (
    <ErrorBoundary>
      <Box sx={classes.box}>
        <AppBar sx={classes.appBar}>Shop Easy</AppBar>
      </Box>
      <Outlet/>
    </ErrorBoundary>
  );
};

export default Header;
