import React from "react";
import { useSelector } from "react-redux";
import { getIsAuthenticated } from "../../redux/auth/authSelectors";
import AuthNav from "../authNav/AuthNav";
import Navigation from "../navigation/Navigation";
import UserMenu from "../UserMenu";
import { HeaderContainer } from "./HeaderStyled";

export default function Header() {
  const isLoggedIn = useSelector(getIsAuthenticated);
  return (
    <HeaderContainer>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderContainer>
  );
}

// =================================================
// BEFORE HOOKS
// =================================================

// import React from "react";
// import { connect } from "react-redux";
// import { getIsAuthenticated } from "../../redux/auth/authSelectors";
// import AuthNav from "../authNav/AuthNav";
// import Navigation from "../navigation/Navigation";
// import UserMenu from "../UserMenu";
// import { HeaderContainer } from "./HeaderStyled";

// const Header = ({ isAuthenticated }) => {
//   return (
//     <HeaderContainer>
//       <Navigation />
//       {isAuthenticated ? <UserMenu /> : <AuthNav />}
//     </HeaderContainer>
//   );
// };

// const mapStateToProps = (state) => ({
//   isAuthenticated: getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(Header);
