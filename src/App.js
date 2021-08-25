import "./App.css";
import { Router } from "@reach/router";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import OpenBook from "./pages/OpenBook";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <Home path="/" />
        <About path="/about" />
        <OpenBook path="/book" />
      </Router>
    </div>
  );
};

export default App;
