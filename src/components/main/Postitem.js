import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { removePost } from "../../actions/post";

const Block = styled.li`
  list-style: none;
  border-bottom: 1px solid black;
  h3 {
    font-weight: bold;
  }
  span {
    font-size: small;
  }
  display: flex;
  align-items: center;
`;

const BtnRemove = styled.button`
  padding: 5px 10px;
  background-color: black;
  color: white;
  cursor: pointer;
  margin: 0 28px;
`;

const StyledLink = styled(Link)`
  flex: 1;
`;

function Postitem({ post }) {
  const { title, content, created_at, id } = post;
  const dispatch = useDispatch();

  function onRemove() {
    if (window.confirm("정말 삭제하시겠습니까?")) dispatch(removePost(id));
  }

  return (
    <Block>
      <StyledLink to={`${id}`}>
        <h3>{title}</h3>
        <p>{content}</p>
        <span> {created_at}</span>
      </StyledLink>
      <BtnRemove onClick={onRemove}>삭제</BtnRemove>
    </Block>
  );
}

export default Postitem;
