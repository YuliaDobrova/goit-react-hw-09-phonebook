import React from "react";
import { connect } from "react-redux";
import { getIsAuthenticated } from "../../redux/auth/authSelectors";
import AuthNav from "../navigation/AuthNav";
import Navigation from "../navigation/Navigation";
import UserMenu from "../navigation/UserMenu";
import { HeaderContainer } from "./HeaderStyled";

const Header = ({ isAuthenticated }) => {
  return (
    <HeaderContainer>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
      {/* <AuthNav /> */}
    </HeaderContainer>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Header);
