import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Paper, Typography } from "@material-ui/core";
import { getProducts } from "../../redux/actions/products/products.action";

import Products from "../../components/Produtcs/Products.component";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <Paper style={{ padding: 50, backgroundColor: "#a8dadc" }}>
        <Typography variant="h5" style={{ marginBottom: 50 }}>
          LETEST PRODUCTS
        </Typography>
        <Products />
      </Paper>
    </div>
  );
};

export default HomePage;
