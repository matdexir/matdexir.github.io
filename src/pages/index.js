import * as React from "react";
import "./index.css";

// markup
const IndexPage = () => {
  return (
    <main className="main-page">
      <nav className="top-navbar">
        <ul className="navbar-list">
          <li className="navbar-element">
            <a href="#">Home</a>
          </li>
          <li className="navbar-element">
            <a href="#">About</a>
          </li>
          <li className="navbar-element">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default IndexPage;
