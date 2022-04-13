import { INIT_PRODUCTS, FILTER_ADD_PRODUCT, FILTER_SEARCH_PRODUCT } from "./types";

export const initProducts = list => ({type: INIT_PRODUCTS, payload: list});

export const addToProducts = id => ({type: FILTER_ADD_PRODUCT, payload: id});

export const filterProduct = item => ({type: FILTER_SEARCH_PRODUCT, payload: item});