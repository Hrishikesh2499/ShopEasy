import { Theme } from "@mui/material";

const shopHomeStyles = {
  box: {
    display: "flex",
    flexDirection: "column",
    m: (theme: Theme) => theme.spacing(2),
    gap: (theme: Theme) => theme.spacing(2),
    height: "calc(100vh - 150px)",
  },
};

export default shopHomeStyles;
