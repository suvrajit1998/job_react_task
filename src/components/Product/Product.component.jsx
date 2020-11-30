import React, { useState } from "react";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  makeStyles,
} from "@material-ui/core";

import { Rating } from "@material-ui/lab";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: 15,
  },
  cardActionArea: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: 400,
    position: "relative",
  },
  cardMedia: {
    position: "relative",
    width: "100%",
    height: "50%",
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    objectFit: "cover",
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
    },
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

const Product = ({
  product: { _id, brand, countInStock, desc, img, name, price, rating },
}) => {
  const classes = useStyles();
  const history = useHistory();
  const [ratingstar, setRatingstar] = useState(rating);
  return (
    <Card
      className={classes.card}
      onClick={() => history.push(`/apple/${_id}`)}
    >
      <CardActionArea className={classes.cardActionArea}>
        <CardMedia image={img} className={classes.cardMedia}>
          <span className={classes.imageBackdrop} />
        </CardMedia>
        <div style={{ display: "flex" }}>
          <CardContent style={{ display: "flex", flexDirection: "column" }}>
            <Typography style={{ marginBottom: 10 }} variant="body1">
              {brand}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {name}
            </Typography>
            <Typography
              style={{ marginBottom: 10 }}
              variant="body2"
              color="textSecondary"
            >
              {desc}
            </Typography>
            <Rating
              style={{ marginBottom: 10 }}
              value={ratingstar}
              onChange={(_, value) => setRatingstar(value)}
            />
            <strong style={{ fontSize: 20 }}>{price}</strong>
          </CardContent>
          <Typography
            style={{ position: "absolute", right: 20, top: "60%" }}
            variant="body2"
            color="textSecondary"
          >
            <strong>{countInStock}</strong> are left
          </Typography>
        </div>
      </CardActionArea>
    </Card>
  );
};

export default Product;
