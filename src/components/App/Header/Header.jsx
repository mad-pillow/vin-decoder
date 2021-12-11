import "./header.scss";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo-container">
        <Link className="header__logo-link" to="/">VIN DECODER</Link>
      </div>
      <nav className="header__nav-container">
        <ul className="header__nav-list">
          <li className="header__nav-item"><Link to="/" className="header__nav-link">Main page</Link></li>
          <li className="header__nav-item"><Link to="/variables" className="header__nav-link">Variables</Link></li>
        </ul>
      </nav>
    </header>
  )
}