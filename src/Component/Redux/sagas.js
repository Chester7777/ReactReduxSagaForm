import {call, put, takeEvery} from "@redux-saga/core/effects";
import {hideLoaderAC, showAlertAC, showLoaderAC} from "./actions";
import {FETCH_POSTS, REQUEST_POSTS} from "./types";


export function* sagaWatcher () {

yield takeEvery(REQUEST_POSTS, sagaWatcher)
}

function* sagaWorker() {
    try {
        yield put(showLoaderAC())
        const payload = yield call(fetchPosts)
        yield put({type: FETCH_POSTS, payload})
        yield put(hideLoaderAC())
    } catch (e) {
        yield put(showAlertAC("Что-то пошло не так"));
        yield put(hideLoaderAC())
    }


}

async function fetchPosts () {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    return  await response.json();
}