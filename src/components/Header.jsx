import React from "react";
import logo from "../img/argentBankLogo.png";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" exact="true" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>

      <div>
        <NavLink className="main-nav-item" to="/signIn">
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
