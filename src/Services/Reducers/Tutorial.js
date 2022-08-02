import { CREATE_TATURIAL, DELETE_TUTORIAL, EDIT_TUTORIAL, REMOVEALLTUTORIAL } from "../Constants";
import { nanoid } from 'nanoid'
let initialState = [
    {
        id: nanoid(),
        "title": "data",
        "description": "dfsafsa"
    },
    {
        id: nanoid(),
        "title": "drashan",
        "description": "vaghasiya"
    },
    {
        id: nanoid(),
        "title": "this is my title",
        "description": "this is my description"
    },
    {
        id: nanoid(),
        "title": "this is my first title",
        "description": "data"
    }
];

export const tutorialReducers = (state = initialState, action) => {
    const { payload } = action
    console.log(state, "payload", payload);
    switch (action.type) {
        case CREATE_TATURIAL:
            return [
                ...state,
                {
                    id: nanoid(), ...payload
                }
            ]
        case DELETE_TUTORIAL:
            return state.filter((item) => item.id != payload)
        case EDIT_TUTORIAL:
            return [
                ...state,
                state.map(
                    (content, i) => content.id === payload.id ? { ...content, title: payload.title, descriptions: payload.description }
                        : content)

            ];
        case REMOVEALLTUTORIAL:
            return [];
        default:
            return state
    }
}