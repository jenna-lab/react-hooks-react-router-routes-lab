import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ link }) {
  return (
    <nav>
      <NavLink exact to="/" activeClassName="active-link">
        Home
      </NavLink>
      <NavLink to="/movies" activeClassName="active-link">
        Movies
      </NavLink>
      <NavLink to="/directors" activeClassName="active-link">
        Directors
      </NavLink>
      <NavLink to="/actors" activeClassName="active-link">
        Actors
      </NavLink>
    </nav>
  );
}

export default NavBar;
