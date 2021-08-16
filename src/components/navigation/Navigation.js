import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { NavigationContainer } from "./NavigationStyled";
import { getIsAuthenticated } from "../../redux/auth/authSelectors";
import sprite from "../../images/sprite.svg";

export default function Navigation() {
  const isLoggedIn = useSelector(getIsAuthenticated);

  return (
    <NavigationContainer>
      <ul className="navList">
        <li className="navListItem">
          <NavLink
            exact
            to="/"
            className="navLink"
            activeClassName="navLinkActive"
          >
            <svg className="navLink__icon">
              <use href={sprite + "#icon-smartphone"} width="30"></use>
            </svg>
          </NavLink>
        </li>
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

        {isLoggedIn && (
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
}

// =================================================
// BEFORE HOOKS
// =================================================

// import React from "react";
// import { connect } from "react-redux";
// import { NavLink } from "react-router-dom";
// import { NavigationContainer } from "./NavigationStyled";
// import { getIsAuthenticated } from "../../redux/auth/authSelectors";
// import sprite from "../../images/sprite.svg";

// const Navigation = ({ isAuthenticated }) => {
//   return (
//     <NavigationContainer>
//       <ul className="navList">
//         <li className="navListItem">
//           <NavLink
//             exact
//             to="/"
//             className="navLink"
//             activeClassName="navLinkActive"
//           >
//             <svg className="navLink__icon">
//               <use href={sprite + "#icon-smartphone"} width="30"></use>
//             </svg>
//           </NavLink>
//         </li>
//         <li className="navListItem">
//           <NavLink
//             to="/"
//             exact
//             className="navLink"
//             activeClassName="navLinkActive"
//           >
//             Home
//           </NavLink>
//         </li>

//         {isAuthenticated && (
//           <li className="navListItem">
//             <NavLink
//               to="/contacts"
//               exact
//               className="navLink"
//               activeClassName="navLinkActive"
//             >
//               Contacts
//             </NavLink>
//           </li>
//         )}
//       </ul>
//     </NavigationContainer>
//   );
// };

// const mapStateToProps = (state) => ({
//   isAuthenticated: getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(Navigation);
