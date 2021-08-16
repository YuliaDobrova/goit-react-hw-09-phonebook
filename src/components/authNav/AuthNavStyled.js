import styled from "styled-components";

export const AuthNavigationContainer = styled.nav`
  .navList {
    display: flex;
    justify-content: flex-end;
  }
  .navListItem:not(:last-child) {
    margin-right: 20px;
  }
  .navLink {
    text-decoration: none;
    font-weight: 700;
    color: white;
  }
  .navLink:hover,
  .navLink:focus {
    color: turquoise;
  }
  .navLinkActive {
    color: turquoise;
  }
`;
