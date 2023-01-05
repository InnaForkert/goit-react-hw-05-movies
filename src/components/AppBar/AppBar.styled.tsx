import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  padding: 15px;
`;

export const NavItem = styled(NavLink)`
  color: black;
  padding: 10px;
  border-radius: 10px;
  transition-property: color, background-color;
  transition-duration: 250ms;
  text-decoration: none;

  &.active,
  :hover,
  :focus {
    color: white;
    background-color: black;
  }
`;
