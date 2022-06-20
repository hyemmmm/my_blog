import SidebarTemplate from "./components/sidebar/SidebarTemplate";
import { createGlobalStyle } from "styled-components";
import Main from "./components/main/Main";
import { combineReducers } from "redux";
import post from "./actions/post";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Button from "./components/common/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";

const rootReducer = combineReducers({
  post,
});

const store = configureStore({
  reducer: rootReducer,
});

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;

}
a {
    text-decoration: none;
    color: inherit;
  }
`;

const style = {
  display: "flex",
  width: "100vw",
  height: "100vh",
  // alignItems: "center",
};

const LoginBtn = styled(Link)`
  background-color: black;
  color: white;
  position: absolute;
  top: 28px;
  right: 28px;
  padding: 14px 28px;
  cursor: pointer;
`;

function App() {
  return (
    <Provider store={store}>
      <div style={style} className="App">
        <GlobalStyle />
        <SidebarTemplate></SidebarTemplate>
        <Main></Main>
        <LoginBtn to={"/login"}>로그인</LoginBtn>
        {/* <StyledLink to={url}>{text}</StyledLink> */}
      </div>
    </Provider>
  );
}

export default App;
