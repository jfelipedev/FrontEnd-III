import { GlobalStyle } from "./Style/GlobalStyle";
import { LeftSideMenu } from "../src/components/LeftSideMenu";
import "./App.css";
import Content from "./components/Content";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LeftSideMenu />
        <Content />
        <GlobalStyle />
      </BrowserRouter>
    </div>
  );
}

export default App;
