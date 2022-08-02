import { INCREMENT, DECREMENT, GETALLPRODUCT, SINGLEPRODUCTREMOVE } from "../Constants";

const initialState = {
    count: 0
}

const productData = {
    product: []
}
export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + action.payload
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - action.payload
            };
        default:
            return state
    }
}

export const productReducers = (state = productData, action) => {
    switch (action.type) {
        case GETALLPRODUCT:
            return {
                ...state,
                product: action.payload
            }
        case SINGLEPRODUCTREMOVE:
            const newproduct = state.product.map((item) => item.id != action.payload)
            return {
                ...state,
                product: newproduct
            }
        default:
            return state
    }
}

