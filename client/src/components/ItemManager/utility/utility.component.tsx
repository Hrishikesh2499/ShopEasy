import { Button, Grid, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ErrorBoundary from "../../common/error-boundary/errorBoundary";

const CREATE_LAB = "Create Item";

interface IProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const ExpenseCategoryUtility = (props: IProps) => {
  return (
    <ErrorBoundary>
      <Grid container>
        <Grid item xs={1}>
          <Tooltip title={CREATE_LAB}>
            <Button
              fullWidth
              variant="contained"
              id="createItem"
              onClick={props.onClick}
              startIcon={<AddIcon />}
            >
              Item
            </Button>
          </Tooltip>
        </Grid>
      </Grid>
    </ErrorBoundary>
  );
};

export default ExpenseCategoryUtility;
