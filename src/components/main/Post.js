import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { PostProvider, PostStateContext } from "../../contexts/postContext";
import EditPost from "./EditPost";
import PostList from "./PostList";

function Post() {
  return (
    <PostProvider>
      <Routes>
        <Route path="/" element={<PostList />}></Route>
        <Route path=":id" element={<EditPost />}></Route>
      </Routes>
    </PostProvider>
  );
}

export default Post;
