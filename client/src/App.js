import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import otherPage from "./otherPage";
import Fib from "./Fib";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/otherpage">Other Page</Link>

        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={otherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
