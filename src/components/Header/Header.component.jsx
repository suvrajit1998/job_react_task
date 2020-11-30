import React from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  InputBase,
  makeStyles,
  fade,
  IconButton,
} from "@material-ui/core";
import { ShoppingCart, Search } from "@material-ui/icons";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "30%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      // width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "30%",
    [theme.breakpoints.up("md")]: {
      // width: "20ch",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <div style={{ display: "flex", flexGrow: 1 }}>
            <Typography
              variant="h6"
              style={{ cursor: "pointer" }}
              component={Link}
              to="/"
            >
              APPLE STORE
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <Search />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
          </div>
          <div style={{ alignItems: "center", display: "flex" }}>
            <Button
              component={Link}
              to="/register"
              style={{ color: "white", marginRight: 10 }}
            >
              Register
            </Button>
            <IconButton>
              <ShoppingCart style={{ color: "white" }} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
