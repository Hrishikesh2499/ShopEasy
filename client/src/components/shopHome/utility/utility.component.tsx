import { Badge, Button, Grid, TextField } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface IProp {
  cartItem: number;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  searchText: string;
}
const ShopHomeUtility = (props: IProp) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ mb: "16px" }}
      display="flex"
      alignItems="center"
    >
      <Grid item xs={10}>
        <TextField
          value={props.searchText}
          onChange={props.onChange}
          size="small"
          label="Search by SKU or Name"
          fullWidth
        />
      </Grid>
      <Grid item xs={2} display="flex" justifyContent="end">
        <Button
          sx={{ p: "8px" }}
          startIcon={
            <Badge badgeContent={props.cartItem}>
              <ShoppingCartIcon color="secondary" />
            </Badge>
          }
          fullWidth
          onClick={props.onClick}
          variant="contained"
          color="inherit"
        >
          Cart
        </Button>
      </Grid>
    </Grid>
  );
};

export default ShopHomeUtility;
