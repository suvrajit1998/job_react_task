import axios from "axios";

const url = "http://localhost:5000/api/products/";

export const fetchAllProdutcs = () => axios.get(url);

export const fetchSingleProduct = (id) => axios.get(`${url}${id}`);
