import "./header.scss";
import React from "react";

export default function Header() {
  return (
      <header className="header">
        <div className="header__logo-container">
          <a className="header__logo-link" href="/">VIN DECODER</a>
        </div>
        <div className="header__nav-container">
          <ul className="header__nav-list">
            <li className="header__nav-item"><a href="/" className="header__nav-link">Main page</a></li>
            <li className="header__nav-item"><a href="/variables" className="header__nav-link">Variables</a></li>
          </ul>
        </div>
      </header>
  )
}