import { CREATE_POST } from "../../actionTypes";

const initialState = {
    postList: []
}
export const postReducer = (state=initialState, action) =>{
    switch(action.type){
        case CREATE_POST:
            return {
                ...state,
                postList: [...state, action.payload]
            };
        default:
            return state
    }
}