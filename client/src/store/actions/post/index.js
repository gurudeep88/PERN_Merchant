import { CREATE_POST } from "../../actionTypes"

export const createPost = (postData) => {
    return{
        type: CREATE_POST,
        payload: postData
    }
}