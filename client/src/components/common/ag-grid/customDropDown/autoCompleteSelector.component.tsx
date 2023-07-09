import { ICellEditorParams } from "@ag-grid-community/all-modules";
import { FormControl, Autocomplete, TextField } from "@mui/material";
import ErrorBoundary from "../../error-boundary/errorBoundary";

import classes from "./autoCompleteSelector.styles";
const AutoCompleteSelector = (props: ICellEditorParams) => {
  // const { value, colDef } = props;

  const options = ["Yes", "No"];
  // const onChange = (value: string) => {
  //   switch (colDef.field) {
  //     default:
  //       break;
  //   }
  // };
  return (
    <ErrorBoundary>
      <FormControl fullWidth sx={classes.root}>
        <Autocomplete
          freeSolo
          disableClearable
          size="small"
          onChange={(_, value) => {
            // onChange(value);
          }}
          // value={value ? "Yes" : "No"}
          options={options}
          renderInput={(params) => (
            <TextField
              {...params}
              key={params.id}
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
      </FormControl>
    </ErrorBoundary>
  );
};

export default AutoCompleteSelector;
