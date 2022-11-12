import { Button, Grid, TextField, Typography } from "@mui/material";
import { default as React, useState } from "react";

export const Header = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const LoginForm = () => {
    return (
      <Grid
        container
        item
        xs={12}
        rowSpacing={2}
        p={1}
        display={showLoginForm ? "block" : "none"}
      >
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth={true}
            id="outlined-basic"
            label="User"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth={true}
            id="outlined-basic"
            label="Password"
            variant="outlined"
          />
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={4}
          alignItems="center"
          justifyContent="flex-end"
        >
          <Grid item xs={3}>
            <Button size="small" onClick={() => setShowLoginForm(false)}>
              Cancel
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              size="small"
              onClick={() => {
                console.log("LOGIN");
              }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  };

  return (
    <Grid item container xs={12} alignItems="center" mt={2}>
      <Grid item xs={2}>
        <Button size="small" onClick={() => setShowLoginForm(!showLoginForm)}>
          Login
        </Button>
      </Grid>
      <Grid item xs={8}>
        <Typography variant="h4" component="div" align="center">
          October 2022
        </Typography>
      </Grid>
      <Grid item xs={2} />
      <LoginForm />
    </Grid>
  );
};
