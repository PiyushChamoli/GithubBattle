import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function Header(props) {
  return (
    <header className="header flex justify-between">
      <div>
        <NavLink
          to="/"
          activeClassName="active"
          className={props.darkMode ? "btn_primary_dark" : "btn_primary_light"}
          exact
        >
          <h2>Popular</h2>
        </NavLink>
        <NavLink
          to="/battle"
          activeClassName="active"
          className={props.darkMode ? "btn_primary_dark" : "btn_primary_light"}
          exact
        >
          <h2>Battle</h2>
        </NavLink>
      </div>
      <button className="btn_sec_wrapper" onClick={props.toggleDarkMode}>
        {props.darkMode ? (
          <FontAwesomeIcon icon={faSun} className="white" />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
      </button>
    </header>
  );
}

export default Header;
