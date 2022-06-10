import SidebarTemplate from "./components/sidebar/SidebarTemplate";
import { createGlobalStyle } from "styled-components";
import Main from "./components/main/Main";
import { PostProvider } from "./contexts/postContext";

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
    <PostProvider>
      <div style={style} className="App">
        <GlobalStyle></GlobalStyle>
        <SidebarTemplate></SidebarTemplate>
        <Main></Main>
      </div>
    </PostProvider>
  );
}

export default App;
