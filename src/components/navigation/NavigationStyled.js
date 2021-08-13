import styled from "styled-components";

export const NavigationContainer = styled.nav`
  .navList {
    display: flex;
    justify-content: flex-end;
  }
  .navListItem:not(:first-child) {
    padding-top: 20px;
  }
  .navListItem:not(:last-child) {
    margin-right: 20px;
  }
  .navLink {
    text-decoration: none;
    font-weight: 700;
    color: white;
  }
  .navLinkActive {
    color: turquoise;
  }
  .navLink__icon {
    width: 30px;
    height: 60px;
    fill: white;
  }
  .navLink__icon:hover,
  .navLink__icon:focus {
    fill: turquoise;
  }
`;
