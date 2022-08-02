import { INCREMENT, DECREMENT, GETALLPRODUCT, SINGLEPRODUCTREMOVE, CREATE_TATURIAL, DELETE_TUTORIAL, EDIT_TUTORIAL, REMOVEALLTUTORIAL } from "../Constants"


export const INCREMENT_ONE = (data) => {
    return {
        type: INCREMENT,
        payload: data
    }
}

export const DECREMENT_ONE = (data) => {
    return {
        type: DECREMENT,
        payload: data
    }
}

export const ALL_PRODUCT = (data) => {
    return {
        type: GETALLPRODUCT,
        payload: data
    }
}

export const DELETEPRODUCT = (id) => {
    return {
        type: SINGLEPRODUCTREMOVE,
        payload: id
    }
}

export const Add_TUTORIAL = (data) => {
    return {
        type: CREATE_TATURIAL,
        payload: data
    }
}

export const DELETETUTORIAL = (id) => {
    return {
        type: DELETE_TUTORIAL,
        payload: id
    }
}

export const EDITTUTORIAL = (item) => {
    return {
        type: EDIT_TUTORIAL,
        payload: item
    }
}

export const REMOVE_ALL_TUTORIAL = (item) => {
    return {
        type: REMOVEALLTUTORIAL
    }
}

