import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../common/Button";
import TitleBox from "../common/TitleBox";
import Postitem from "./Postitem";

const Block = styled.div``;

function PostList() {
  const postList = useSelector((state) => state.post);
  const navigate = useNavigate();
  return (
    <Block>
      <TitleBox title={"포스트 목록"} />

      <ul>
        {postList.map((post) => (
          <Postitem post={post} key={post.id}>
            {post.title}
            {post.content}
            {post.created_at}
          </Postitem>
        ))}
      </ul>
      <Button text="작성하기" onClick={() => navigate("/post/edit/write")} />
    </Block>
  );
}

export default PostList;

//npm install redux react-redux @reducjs/toolkit
