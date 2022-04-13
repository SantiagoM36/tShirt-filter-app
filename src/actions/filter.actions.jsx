import { INIT_PRODUCTS, FILTER_ONE_PRODUCT, FILTER_SEARCH_PRODUCT } from "./types";

export const initProducts = list => ({type: INIT_PRODUCTS, payload: list});

export const oneProduct = id => ({type: FILTER_ONE_PRODUCT, payload: id});

export const filterProduct = item => ({type: FILTER_SEARCH_PRODUCT, payload: item});