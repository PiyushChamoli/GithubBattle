import React from "react";
import Players from "./Players";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGroup,
  faJetFighter,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

function GithubBattle(props) {
  return (
    <div className="battle">
      <h2>Instructions</h2>
      <ul className="flex battle-header">
        <li>
          <h3>Enter two Github Users</h3>
          <FontAwesomeIcon icon={faUserGroup} style={{ color: "#FBBE73" }} />
        </li>
        <li>
          <h3>Battle</h3>
          <FontAwesomeIcon icon={faJetFighter} style={{ color: "#727272" }} />
        </li>
        <li>
          <h3>See the winner</h3>
          <FontAwesomeIcon icon={faTrophy} style={{ color: "#FFD82F" }} />
        </li>
      </ul>
      <Players {...props} />
    </div>
  );
}

export default GithubBattle;
