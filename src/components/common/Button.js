import React from "react";
import styled from "styled-components";
import { main_color } from "./color";

const Btn = styled.button`
  padding: 10px 20px;
  background-color: ${main_color};
  color: white;
  font-weight: bold;
  font-size: 28px;
  border: none;
  cursor: pointer;
`;

function Button({ text, onClick }) {
  return <Btn onClick={onClick}>{text}</Btn>;
}

export default Button;
