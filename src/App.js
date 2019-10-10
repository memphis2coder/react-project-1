import React, { Component } from "react";

import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <SideDrawer />
        <p>page content</p>
      </div>
    );
  }
}

export default App;
