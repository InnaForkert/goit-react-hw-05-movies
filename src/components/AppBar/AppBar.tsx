import { NavBar, NavItem } from "./AppBar.styled";

export function AppBar() {
  return (
    <NavBar>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/movies">Search</NavItem>
    </NavBar>
  );
}
