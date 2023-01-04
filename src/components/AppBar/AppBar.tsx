import { NavLink } from "react-router-dom";

export function AppBar() {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
    </nav>
  );
}
