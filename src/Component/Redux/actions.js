import {CREATE_POST, HIDE_ALERT, HIDE_LOADER, REQUEST_POSTS, SHOW_ALERT, SHOW_LOADER} from "./types";


export function createPostAC(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}
export function showLoaderAC() {
    return {
        type: SHOW_LOADER,
    }
}
export function hideLoaderAC() {
    return {
        type: HIDE_LOADER,
    }
}
export function showAlertAC(text) {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: text
        })
        setTimeout(() => {
            dispatch(hideAlertAC())
        }, 3000)
    }
}
export function hideAlertAC() {
    return {
        type: HIDE_ALERT,
    }
}

export function fetchPostsAC () {
    return {
        type: REQUEST_POSTS
    }
    return async (dispatch) => {
        try {
            dispatch(showLoaderAC())
            const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
            const json = await response.json();
            // dispatch({type: FETCH_POSTS, payload: json})
            dispatch(hideLoaderAC())
        } catch (e) {
            dispatch(showAlertAC("Что-то пошло не так"));
            dispatch(hideLoaderAC())
        }
    }
}