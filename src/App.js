import React from "react"
import PostForm from "./Component/PostForm";
import Posts from "./Component/Posts";
import FetchedPosts from "./Component/FetchedPosts";

function App() {
  return (
    <div className="container">
        <div className="row">
            <div className="col">
                <PostForm />
            </div>
        </div>
        <div className="row">
            <div className="col">
                <h2>Синхронные посты</h2>
                <Posts />
            </div>
            <div className="col">
                <h2>Асинхронные посты</h2>
                <FetchedPosts />
            </div>
        </div>
    </div>
  );
}

export default App;
