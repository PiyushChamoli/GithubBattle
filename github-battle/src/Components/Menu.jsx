import React from "react";
import { NavLink } from "react-router-dom";
import Loader from "./Loader";

class Menu extends React.Component {
  render() {
    if (!this.props.data) {
      return <Loader />;
    }
    const dataItems = this.props.data.items;
    const langugages = dataItems.reduce((acc, item) => {
      acc = acc.concat(item.language);
      return acc;
    }, []);
    const allLanguages = [...new Set(langugages)];
    return (
      <ul className="menu flex justify-center">
        {allLanguages.map((language) =>
          language === null ? (
            <li key={language}>
              <NavLink activeClassName="active" to="/" exact>
                All
              </NavLink>
            </li>
          ) : (
            <li key={language}>
              <NavLink activeClassName="active" to={`/post/${language}`}>
                {language}
              </NavLink>
            </li>
          )
        )}
      </ul>
    );
  }
}

export default Menu;
