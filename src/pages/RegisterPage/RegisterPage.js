import React, { useState } from "react";

import {
  Paper,
  Card,
  makeStyles,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@material-ui/core";

import { Email, Visibility, Phone } from "@material-ui/icons";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 50,
    backgroundColor: "#ffcdb2",
  },
  card: {
    maxWidth: 400,
    minWidth: 400,
    padding: 15,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  margin: {
    marginTop: 20,
    marginBottom: 20,
  },
});

const RegisterPage = () => {
  const [user, setUser] = useState({ email: "", password: "", phNumber: "" });
  const classes = useStyles();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    setUser({ email: "", password: "", phNumber: "" });
    history.push("/");
  };

  return (
    <Paper className={classes.root}>
      <form onSubmit={handleSubmit}>
        <Card className={classes.card}>
          <Typography variant="h5">Register</Typography>
          <TextField
            type="email"
            label="Email"
            className={classes.margin}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Email />
                </InputAdornment>
              ),
            }}
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <TextField
            type="password"
            label="Password"
            className={classes.margin}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Visibility />
                </InputAdornment>
              ),
            }}
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <TextField
            type="number"
            label="Phone Number"
            className={classes.margin}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Phone />
                </InputAdornment>
              ),
            }}
            value={user.phNumber}
            onChange={(e) => setUser({ ...user, phNumber: e.target.value })}
          />
          <Button
            type="submit"
            variant="contained"
            style={{ backgroundColor: "#ffcdb2", color: "#000000" }}
          >
            Register
          </Button>
        </Card>
      </form>
    </Paper>
  );
};

export default RegisterPage;
