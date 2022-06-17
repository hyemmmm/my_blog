import React from "react";
import styled, { css } from "styled-components";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Block = styled.div`
  width: 100%;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

const BtnNum = styled.div`
  /* border: 1px solid black; */
  padding: 28px;
  cursor: pointer;
  font-size: 28px;
  ${({ active }) =>
    active &&
    css`
      font-weight: bold;
      text-decoration: underline;
    `}
  &:hover {
    font-weight: bolder;
  }
`;

const BtnsArrow = styled.div`
  /* border: 1px solid black; */
  width: 20px;
  height: 20px;
  border-radius: 4px;
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PagingBox = ({ length, currentPage, setCurrentPage }) => {
  let max = Math.ceil(length / 10);
  function renderNum() {
    let numArr = [];
    for (let i = 1; i <= max; i++) {
      numArr.push(
        <BtnNum active={i === currentPage} onClick={() => setCurrentPage(i)}>
          {i}
        </BtnNum>
      );
    }
    return numArr;
  }

  return (
    <Block>
      <BtnsArrow
        onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
      >
        <FaAngleLeft />
      </BtnsArrow>
      {/* <BtnNum active={true}>1</BtnNum>
      <BtnNum>2</BtnNum> */}
      {renderNum()}
      <BtnsArrow
        onClick={() => currentPage < max && setCurrentPage(currentPage + 1)}
      >
        <FaAngleRight />
      </BtnsArrow>
    </Block>
  );
};

export default PagingBox;
