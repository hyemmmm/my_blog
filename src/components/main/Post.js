import React from "react";
import { Route, Routes } from "react-router-dom";
import EditPost from "./EditPost";
import PostDetail from "./PostDetail";
import PostList from "./PostList";

function Post() {
  return (
    <Routes>
      <Route path="/" element={<PostList />}></Route>
      <Route path=":id" element={<PostDetail />}></Route>
      <Route path="/edit/:id" element={<EditPost />}></Route>
    </Routes>
  );
}

export default Post;
