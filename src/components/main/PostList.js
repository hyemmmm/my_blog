import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PostStateContext } from "../../contexts/postContext";
import Button from "../common/Button";
import TitleBox from "../common/TitleBox";
import Postitem from "./Postitem";

const Block = styled.div``;

function PostList() {
  const postList = useContext(PostStateContext);
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
      <Button text="작성하기" onClick={() => navigate("/post/write")} />
    </Block>
  );
}

export default PostList;
