import React from "react";
import logo from "../img/argentBankLogo.png";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUsers } from "../redux/selectors/selectors";
import { resetUser } from "../redux/actions/actionUser";

function Header(props) {
  const state = useSelector(selectUsers);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(resetUser());
  };

  const signIn = (
    <div>
      <NavLink className="main-nav-item" to="/signIn">
        <i className="fa fa-user-circle"></i>
        Sign In
      </NavLink>
    </div>
  );

  const signOut = (
    <div>
      <NavLink className="main-nav-item" to="/user">
        <i className="fa fa-user-circle"></i>
        {state.data.firstName}
      </NavLink>
      <NavLink className="main-nav-item" to="/" onClick={() => logOut()}>
        <i className="fa fa-sign-out"></i>
        Sign Out
      </NavLink>
    </div>
  );

  const displaySignInOrSignOut = state.data.firstName ? signOut : signIn;

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
      {displaySignInOrSignOut}
    </nav>
  );
}

export default Header;
