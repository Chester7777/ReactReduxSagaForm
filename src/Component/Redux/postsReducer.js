import {CREATE_POST, FETCH_POSTS} from "./types";

let initialState = {
    posts: [],
    fetchedPosts: []
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POST:
            //второй вариант синтаксиса создания копии
            // return {...state, posts: state.posts.concat([action.payload])}
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }
        case FETCH_POSTS:
            return {
                ...state,
                fetchedPosts: action.payload
            }

        default:
            return state
    }

}