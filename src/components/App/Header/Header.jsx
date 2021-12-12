import "./header.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  constructor() {
    super();

    this.state = {
      isMenuClose: true,
    }
  }

  toggleNavMenu = () => {
    if (this.state.isMenuClose) {
      this.setState({ isMenuClose: false });
    } else {
      this.setState({ isMenuClose: true });
    }
  }

  closeNavMenu = () => {
      this.setState({ isMenuClose: true });
  }

  render() {
    let openMenuClassName = "";

    if (this.state.isMenuClose) {
      openMenuClassName = " header__nav-container--closed";
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }

    return (
      <header className="header">
        <div className="header__logo-container">
          <Link className="header__logo-link" to="/">VIN DECODER</Link>
        </div>
        <nav className={`header__nav-container${openMenuClassName}`} onClick={this.closeNavMenu}>
          <ul className="header__nav-list">
            <li className="header__nav-item"><Link to="/" className="header__nav-link">Main page</Link></li>
            <li className="header__nav-item"><Link to="/variables" className="header__nav-link">Variables</Link></li>
          </ul>
        </nav>
        <div className="header__menu-btn-container" onClick={this.toggleNavMenu}>
          <span className="header__menu-btn"></span>
        </div>
      </header>
    )
  }
}