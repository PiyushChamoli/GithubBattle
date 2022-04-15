import React from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeFork,
  faStar,
  faTriangleExclamation,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

class Main extends React.Component {
  render() {
    if (!this.props.data) {
      return <Loader />;
    }
    let allItems = this.props.data.items;
    return (
      <ul className="main flex justify-between">
        {allItems.map((item, i) => (
          <li key={item.id} className="flex-20 card">
            <h3># {i + 1}</h3>
            <img src={item.owner.avatar_url} alt={item.name} />
            <h2>{item.name}</h2>
            <ul>
              <li className="itemName">
                <Link to={item.html_url}>
                  <FontAwesomeIcon icon={faUser} />
                  <span>{item.name}</span>
                </Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faStar} />
                <span>{item.stargazers_count}</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCodeFork} />
                <span>{item.forks_count}</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faTriangleExclamation} />
                <span>{item.open_issues_count}</span>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    );
  }
}

export default Main;
