import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const Category = styled.div`
  color: white;
  cursor: pointer;
  border-radius: 8px;
  &:hover {
    background-color: lightgray;
  }
  & + & {
    margin-top: 14px;
  }
  ${({ active }) =>
    active &&
    css`
      background-color: gray;
    `}
`;

const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
  padding: 14px 28px;
  border-radius: 8px;
`;

function SidebarCategory({ data, onClickMenu }) {
  const { text, url, active, id } = data;
  return (
    <Category active={active}>
      <StyledLink to={url}>{text}</StyledLink>
    </Category>
  );
}

export default SidebarCategory;
