import React from "react";
import Link from "next/link";

// import PageNotFound from "./PageNotFound";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  navbar_color">
      <img src="/logo.png" className="App-logo" alt="logo" href="/" />
      <a className="navbar-brand name" href="/#">
        WIDESPACE
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item navbar_fonts active">
            <Link href="/">
              <a className="nav-link" tabIndex="-1" aria-disabled="true">
                Home
              </a>
            </Link>
          </li>
          <li className="nav-item navbar_fonts">
            <Link href="/About">
              <a className="nav-link">About</a>
            </Link>
          </li>

          <li className="nav-item navbar_fonts">
            <Link href="/projects">
              <a className="nav-link">Projects</a>
            </Link>
          </li>

          <li className="nav-item navbar_fonts">
            <a className="nav-link disabled" tabIndex="-1" aria-disabled="true">
              Copyright 2020{" "}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
/*<Route path="/404" component={PageNotFound} />
<Redirect to="/404" />*/

export default Navigation;
