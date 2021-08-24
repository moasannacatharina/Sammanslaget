import logo from "./logo.svg";
import "./App.css";

import HTMLFlipBook from "react-pageflip";
import Page from "./components/page";

function App() {
  return (
    <div className="App">
      <HTMLFlipBook width={300} height={500}>
        <Page number="1" header="Start">
          HELLO
        </Page>
        <Page number="2" header="hehe"></Page>
        <Page number="3" header="snart slut"></Page>
        <Page number="4" header="the END"></Page>
      </HTMLFlipBook>
    </div>
  );
}

export default App;
