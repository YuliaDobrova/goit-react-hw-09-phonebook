import React from "react";
import { NavLink } from "react-router-dom";
import { AuthNavigationContainer } from "./AuthNavStyled";

const AuthNav = () => (
  <AuthNavigationContainer>
    <ul className="navList">
      <li className="navListItem">
        <NavLink
          to="/register"
          exact
          className="navLink"
          activeClassName="navLinkActive"
        >
          Registration
        </NavLink>
      </li>
      <li className="navListItem">
        <NavLink
          to="/login"
          exact
          className="navLink"
          activeClassName="navLinkActive"
        >
          Login
        </NavLink>
      </li>
    </ul>
  </AuthNavigationContainer>
);

export default AuthNav;
