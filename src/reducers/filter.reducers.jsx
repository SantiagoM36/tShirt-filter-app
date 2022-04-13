import { INIT_PRODUCTS, FILTER_ADD_PRODUCT, FILTER_SEARCH_PRODUCT } from '../actions/types'; 

//STATE
export const initialState = {
    products: [],
    searchProduct: ''
}

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_PRODUCTS:
        
        return {...state, products: action.payload.products}

        case FILTER_ADD_PRODUCT:
            
            console.log('Action add: ', action)
        return state;

        case FILTER_SEARCH_PRODUCT:

            const {products} = state;
            if(!products) return [];
            
            let result;

            let product = '';
            if (action.payload.length >= 2) {
                product = action.payload
            } else {
                product = ''
            }

            let productsState = [...products];
            let productSearch = product;
            if(productSearch !== '') {
                result = productsState.filter(product => (product.title.toLowerCase().indexOf(productSearch.toLowerCase()) !== -1))
            } else {
                result = productsState
            }
        
        return {...state, products: result}
    
        default:
            return state
    }
}