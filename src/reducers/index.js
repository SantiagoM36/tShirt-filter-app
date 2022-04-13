import { combineReducers } from 'redux';
import { filterReducer } from './filter.reducers';

const reducer = combineReducers({
    items: filterReducer
})

export default reducer;