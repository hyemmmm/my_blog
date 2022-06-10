import SidebarTemplate from "./components/sidebar/SidebarTemplate";
import { createGlobalStyle } from "styled-components";
import Main from "./components/main/Main";

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
    <div style={style} className="App">
      <GlobalStyle></GlobalStyle>
      <SidebarTemplate></SidebarTemplate>
      <Main></Main>
    </div>
  );
}

export default App;
