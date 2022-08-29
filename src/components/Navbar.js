import React, { Component } from 'react';

// Always use NavLink instead of Link read this https://v5.reactrouter.com/web/api/NavLink
import { NavLink as Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    const { routes } = this.props;

    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              NewsMonkey
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4">
                {routes.map(({ path, category }) => (
                  <li key={path} className="nav-item">
                    <Link className="nav-Link" activeClassName="active" to={path}>
                      {path === '/' ? 'Home' : category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;