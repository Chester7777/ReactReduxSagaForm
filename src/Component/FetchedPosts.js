import React from "react";
import Post from "./Post";
import {useDispatch, useSelector} from "react-redux";
import {fetchPostsAC} from "./Redux/actions";
import {Loading} from "./Loading";


export default ({}) => {
    const dispatch = useDispatch()
    const posts = useSelector((state) => {
        return state.posts.fetchedPosts
    })
        const loading = useSelector(state => state.app.loading)

    if(loading) {
        return (
            <Loading />
        )
    }
    if(!posts.length) {
        return <button
            className="btn btn-primary"
        onClick={() => dispatch(fetchPostsAC())}
        >Загрузить</button>
    }
    return posts.map(post => <Post post={post} key={post.id}/>)
}