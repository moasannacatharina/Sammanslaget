import "./App.css";
import { Router } from "@reach/router";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <Home path="/" />
        <About path="/about" />
      </Router>
    </div>
  );
};

export default App;
