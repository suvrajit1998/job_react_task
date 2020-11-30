import * as api from "../../../api/api";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAllProdutcs();

    dispatch({ type: "FETCH_ALL_PRODUCTS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getSingleProduct = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchSingleProduct(id);

    dispatch({ type: "FETCH_SINGLE_PRODUCT", payload: data });
  } catch (error) {
    console.log(error);
  }
};
