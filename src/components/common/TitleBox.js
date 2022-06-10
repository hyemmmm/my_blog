import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 28px;
`;

function TitleBox({ title }) {
  return <Title>{title}</Title>;
}

export default TitleBox;
