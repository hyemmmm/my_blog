import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import About from "./About";
import Home from "./Home";
import Post from "./Post";

const Block = styled.div`
  flex: 1;
  padding: 50px;
`;

function Main() {
  return (
    <Block>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about/*" element={<About />}></Route>
        <Route path="/post/*" element={<Post />}></Route>
      </Routes>
    </Block>
  );
}

export default Main;
