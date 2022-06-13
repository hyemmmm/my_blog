import SidebarTemplate from "./components/sidebar/SidebarTemplate";
import { createGlobalStyle } from "styled-components";
import Main from "./components/main/Main";
import { combineReducers } from "redux";
import post from "./actions/post";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

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

function App() {
  return (
    <Provider store={store}>
      <div style={style} className="App">
        <GlobalStyle />
        <SidebarTemplate></SidebarTemplate>
        <Main></Main>
      </div>
    </Provider>
  );
}

export default App;
