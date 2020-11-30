import React from "react";

import { CircularProgress, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

import Product from "../Product/Product.component";

const Products = () => {
  const products = useSelector((state) => state.products);
  return !products.length ? (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
    </div>
  ) : (
    <Grid container alignItems="stretch" spacing={3}>
      {products.map((product) => (
        <Grid item key={product._id} xs={12} sm={4}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
