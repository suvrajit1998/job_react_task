import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getSingleProduct } from "../../redux/actions/products/products.action";

import {
  Paper,
  Card,
  Grid,
  makeStyles,
  CardMedia,
  Button,
  Typography,
  IconButton,
  TextField,
  Divider,
} from "@material-ui/core";

import { Rating } from "@material-ui/lab";

import { UnfoldMore } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f8edeb",
    padding: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    position: "relative",
    backgroundColor: "#f8edeb",
    width: "100%",
    height: 500,
    borderRadius: 15,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    cursor: "pointer",
  },
  cardMedia: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  container: {
    width: "100%",
    // height: 500,
    display: "flex",
    marginTop: 100,
  },
  productContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  productPrice: {
    marginTop: 30,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    border: "1px solid #6d6875",
    borderRadius: 15,
    padding: 10,
  },
  flexItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: 10,
  },
  flexItemSpaceBetween: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  imageButton: {
    position: "absolute",
    left: "27%",
    // right: 0,
    // top: 0,
    bottom: "10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

const ProductDetails = ({ match }) => {
  const classes = useStyles();
  const [qty, setQty] = useState(1);
  const { id } = match.params;
  const dispatch = useDispatch();
  const { brand, countInStock, desc, img, name, price, rating } = useSelector(
    (state) => state.products
  );
  const [ratingstar, setRatingstar] = useState(rating);

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch, id]);

  return (
    <Paper className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Button
            component={Link}
            to="/"
            className="goBackHomeButton"
            style={{ marginBottom: 10 }}
          >
            Go Back
          </Button>
          <Card className={classes.card}>
            <CardMedia className={classes.cardMedia} image={img}>
              <span className={classes.imageBackdrop} />
              <span className={classes.imageButton}>
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  className={classes.imageTitle}
                >
                  Add TO CART
                  <span className={classes.imageMarked} />
                </Typography>
              </span>
            </CardMedia>
          </Card>
          <Divider style={{ marginTop: 10 }} />
          <div
            style={{
              display: "flex",
            }}
          >
            <Typography
              style={{ flexGrow: 1, padding: "20px 10px 0 10px" }}
              variant="h6"
            >
              REVIEWS
            </Typography>
            <IconButton style={{ marginTop: 5 }}>
              <UnfoldMore />
            </IconButton>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2} className={classes.container}>
            <Grid item xs={12} sm={6} className={classes.productContent}>
              <Typography style={{ marginBottom: 10 }} variant="h5">
                {brand}
              </Typography>
              <Typography style={{ marginBottom: 10 }} variant="h5">
                {name}
              </Typography>
              <Divider style={{ marginBottom: 10, width: "100%" }} />
              <div className={classes.flexItem}>
                <Rating
                  style={{ margin: "0 10px 0 0" }}
                  value={ratingstar}
                  onChange={(_, value) => setRatingstar(value)}
                />
                <Typography variant="body2">Rating</Typography>
              </div>
              <Divider style={{ marginBottom: 10, width: "100%" }} />
              <div className={classes.flexItem}>
                <Typography style={{ margin: "0 10px 0 0" }} variant="body1">
                  Price:
                </Typography>
                <strong style={{ fontSize: 20 }}>{price}</strong>
              </div>
              <Divider style={{ marginBottom: 10, width: "100%" }} />
              <div className={classes.flexItem}>
                <Typography variant="body1" style={{ margin: "0 10px 0 0" }}>
                  Description:
                </Typography>
                <Typography variant="body2">{desc}</Typography>
              </div>
              <Divider style={{ marginBottom: 10, width: "100%" }} />
            </Grid>
            <Grid item xs={12} sm={6} className={classes.productPrice}>
              <div className={classes.flexItemSpaceBetween}>
                <Typography variant="body1">Price:</Typography>
                <Typography variant="body2" color="textSecondary">
                  {price}
                </Typography>
              </div>
              <Divider style={{ marginBottom: 10, width: "100%" }} />
              <div className={classes.flexItemSpaceBetween}>
                <Typography variant="body1">Status:</Typography>
                <Typography variant="body2" color="textSecondary">
                  {countInStock} in stock
                </Typography>
              </div>
              <Divider style={{ marginBottom: 10, width: "100%" }} />
              <TextField
                select
                label="Quantity"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
                SelectProps={{
                  native: true,
                }}
                helperText="Please check your Quantity"
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </TextField>
              <Divider style={{ marginBottom: 10, width: "100%" }} />
              <Button className="cartButton" variant="outlined">
                ADD TO CART
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProductDetails;
