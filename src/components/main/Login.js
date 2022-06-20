import React from "react";
import styled from "styled-components";
import Button from "../common/Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 280px;
  padding: 28px;
  border: 1px solid black;
`;
const ID = styled.input`
  height: 28px;
  cursor: pointer;
`;
const Password = styled.input`
  height: 28px;
  margin-bottom: 28px;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Box>
        <ID type="text" placeholder="아이디" />
        <Password type="password" name="" id="" placeholder="비밀번호" />
        <Button text={"로그인"}></Button>
        <Button text={"회원가입"}></Button>
      </Box>
    </Container>
  );
};

export default Login;
