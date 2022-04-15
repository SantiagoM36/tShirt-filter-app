import { INIT_PRODUCTS, FILTER_ONE_PRODUCT, FILTER_SEARCH_PRODUCT } from '../actions/types'; 

//STATE
export const initialState = {
    products: [],
    filter: []
}

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_PRODUCTS:
        
        return {...state, products: action.payload.products}

        case FILTER_SEARCH_PRODUCT:

            const {products} = state;
            if(!products) return [];
            

            let product = '';
            if (action.payload.length >= 2) {
                product = action.payload
            } else {
                product = ''
            }

            const productsState = [...state.products];
            let productSearch = product;
            let result;

            if(productSearch !== '') {
                result = productsState.filter(product => (product.title.toLowerCase().indexOf(productSearch.toLowerCase()) !== -1))
            } else {
                result = productsState
            }
        
        return {...state, filter: result}
    
        default:
            return state
    }
}