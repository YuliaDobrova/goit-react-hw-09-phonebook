import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
// import { mainRoutes } from "../../routes/mainRoutes";
import { NavigationContainer } from "./NavigationStyled";
import { getIsAuthenticated } from "../../redux/auth/authSelectors";

const Navigation = ({ isAuthenticated }) => {
  return (
    <NavigationContainer>
      <ul className="navList">
        <li className="navListItem">
          <NavLink
            to="/"
            exact
            className="navLink"
            activeClassName="navLinkActive"
          >
            Home
          </NavLink>
        </li>
        {isAuthenticated && (
          <li className="navListItem">
            <NavLink
              to="/contacts"
              exact
              className="navLink"
              activeClassName="navLinkActive"
            >
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);

// =====================================
// <ul className="navList">
//     {mainRoutes.map((route) => (
//       <li className="navListItem" key={route.path}>
//         <NavLink
//           to={route.path}
//           exact={route.exact}
//           className="navLink"
//           activeClassName="navLinkActive"
//         >
//           {route.name.toUpperCase()}
//         </NavLink>
//       </li>
//     ))}
//   </ul>
