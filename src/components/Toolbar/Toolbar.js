import React from "react";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div>
        <DrawerToggleButton />
      </div>
      <div className="toolbar__logo">
        <a href="/">The Logo</a>
      </div>
      <div className="spacer" />
      <div className="toolbar__navigation-items">
        <ul>
          <li>
            <a href="/">Link</a>
          </li>
          <li>
            <a href="/">Link</a>
          </li>
          <li>
            <a href="/">Link</a>
          </li>
          <li>
            <a href="/">Link</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
