import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeFork,
  faStar,
  faTriangleExclamation,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function AllCard(props) {
  return (
    <ul
      className={
        props.darkMode
          ? "card_dark main flex justify-between"
          : "card_light main flex justify-between"
      }
    >
      {props.data.map((item, i) => (
        <li key={item.id} className="flex-20 card">
          <h3># {i + 1}</h3>
          <img src={item.owner.avatar_url} alt={item.name} />
          <h2>{item.name}</h2>
          <ul>
            <li className="itemName">
              <a href={item.html_url}>
                <FontAwesomeIcon icon={faUser} />
                <span>{item.name}</span>
              </a>
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

export default AllCard;
