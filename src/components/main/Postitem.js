import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Block = styled.li`
  list-style: none;
  border-bottom: 1px solid black;
  h3 {
    font-weight: bold;
  }
  span {
    font-size: small;
  }
`;

function Postitem({ post }) {
  const { title, content, created_at, id } = post;
  return (
    <Block>
      <Link to={`${id}`}>
        <h3>{title}</h3>
        <p>{content}</p>
        <span> {created_at}</span>
      </Link>
    </Block>
  );
}

export default Postitem;
