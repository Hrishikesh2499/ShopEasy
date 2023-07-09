import { Button, Grid, Typography } from "@mui/material";
import { IItem } from "../../../../../interfaces/item.interface";
export interface INameSectionProp {
  item: IItem;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}
const NameSection = (props: INameSectionProp) => {
  return (
    <Grid item container display="flex" spacing={3}>
      <Grid item xs={12}>
        <Typography variant="body2" fontSize="24px" fontWeight="bold">
          {props.item.title || ""}
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="body2">{props.item.body || ""}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2">
          Seller: {props.item.vendor?.name || ""}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body2" fontSize="16px" fontWeight="bold">
          ${props.item.variant?.price || ""}
        </Typography>
      </Grid>
      <Grid item xs={3} display="flex" alignItems="end">
        <Button fullWidth variant="contained" onClick={props.onClick}>
          Remove
        </Button>
      </Grid>
    </Grid>
  );
};

export default NameSection;
