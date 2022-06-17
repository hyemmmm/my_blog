import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../common/Button";
import PagingBox from "../common/PagingBox";
import TitleBox from "../common/TitleBox";
import Postitem from "./Postitem";

const Block = styled.div``;

function PostList() {
  const postList = useSelector((state) => state.post);
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(10);

  const renderList = postList.filter(
    (_, idx) => (currentPage - 1) * count < idx + 1 && currentPage * count > idx
  );

  return (
    <Block>
      <TitleBox title={"포스트 목록"} />
      <select>
        <option>10개씩 보기</option>
        <option>20개씩 보기</option>
      </select>
      <ul>
        {renderList.map((post) => (
          <Postitem post={post} key={post.id}>
            {post.title}
            {post.content}
            {post.created_at}
          </Postitem>
        ))}
      </ul>
      <PagingBox
        length={postList.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Button text="작성하기" onClick={() => navigate("/post/edit/write")} />
    </Block>
  );
}

export default PostList;

//npm install redux react-redux @reducjs/toolkit
