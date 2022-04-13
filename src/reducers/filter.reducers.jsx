import { INIT_PRODUCTS, FILTER_ONE_PRODUCT, FILTER_SEARCH_PRODUCT } from '../actions/types'; 

//STATE
export const initialState = {
    products: [],
    searchProduct: ''
}

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_PRODUCTS:
        
        return {...state, products: action.payload.products}

        case FILTER_ONE_PRODUCT:
            
            let result;

            let productsState = [...state.products];
            let productSearch = action.payload;
            if(productSearch !== '') {
                result = productsState.filter(product => (product.title.toLowerCase().indexOf(productSearch.toLowerCase()) !== -1))
            } else {
                result = productsState
            }

            //console.log('Result: ', {products: result})

        return {...state, products: result};

        case FILTER_SEARCH_PRODUCT:

            const {products} = state;
            if(!products) return [];
            

            let product = '';
            if (action.payload.length >= 2) {
                product = action.payload
            } else {
                product = ''
            }
        
        return {...state, searchProduct: product }
    
        default:
            return state
    }
}