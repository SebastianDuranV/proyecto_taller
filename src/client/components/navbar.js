import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// import PageNotFound from "./PageNotFound";

function Navigation() {
  const { pathname } = useRouter();

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar_color">
      <img src="/logo.png" className="App-logo" alt="logo" href="/#" />
      <div><div className="name" href="/#">
        WIDESPACE
      </div>
      </div>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <div className="navbar-dark">
          <span className="navbar-toggler-icon"></span>
        </div>
      </button>
      <div className=" navbar-dark collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li
            className={
              "nav-item navbar_fonts " + (pathname === "/" ? "active" : "")
            }
          >
            <Link href="/">
              <a className="nav-link" tabIndex="-1" aria-disabled="true">
                Inicio
              </a>
            </Link>
          </li>

          <li
            className={
              "nav-item navbar_fonts " +
              (pathname === "/projects" ? "active" : "")
            }
          >
            <Link href="/projects">
              <a className="nav-link">Proyectos</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
/*<Route path="/404" component={PageNotFound} />
<Redirect to="/404" />*/

export default Navigation;
