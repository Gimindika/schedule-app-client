import { Divider, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { default as React } from "react";
import { EventList, PersonList } from "./index";

export const FilterMD = () => {
  const theme = useTheme();
  const screenBreakpointMDUP = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <Grid
        item
        container
        md={3}
        display={screenBreakpointMDUP ? "block" : "none"}
      >
        <PersonList />
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <EventList />
      </Grid>
    </>
  );
};
