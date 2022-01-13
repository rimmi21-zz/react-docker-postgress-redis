import logo from "./logo.svg";
import "./App.css";
import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Fib from "./Fib";

class App extends Component {
  render() {
    return (
      <div>
        <Fragment>
          <Router>
            <Routes>
              <Route exact path="/" element={<Fib />} />
            </Routes>
          </Router>
        </Fragment>
      </div>
    );
  }
}

export default App;
