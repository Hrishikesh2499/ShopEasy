import { Theme } from "@mui/material";

const cartListStyles = {
  grid: {
    display: "flex",
    m: (theme: Theme) => theme.spacing(2),
    gap: (theme: Theme) => theme.spacing(2),
  },
};
export default cartListStyles;
