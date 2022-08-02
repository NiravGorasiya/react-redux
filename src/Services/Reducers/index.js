import { combineReducers } from 'redux';
import { cartReducer, productReducers } from "./reducers"
import { tutorialReducers } from './Tutorial';


const rootReducer = combineReducers({
    cartReducer,
    productReducers,
    tutorialReducers
})

export default rootReducer;