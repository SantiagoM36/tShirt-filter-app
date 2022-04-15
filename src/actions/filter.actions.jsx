import { INIT_PRODUCTS, FILTER_SEARCH_PRODUCT } from "./types";

export const initProducts = list => ({type: INIT_PRODUCTS, payload: list});

export const filterProduct = item => ({type: FILTER_SEARCH_PRODUCT, payload: item});