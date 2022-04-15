import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGroup,
  faJetFighter,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class Battle extends React.Component {
  constructor() {
    super();
    this.state = {
      player1: "",
      player2: "",
      click1: false,
      click2: false,
    };
  }

  handleChange = (event, id) => {
    this.setState({ [id]: event.target.value });
  };

  handleClick = (id) => {
    this.setState((prevState) => ({
      [id]: !prevState[id],
    }));
  };

  render() {
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
        <h2>Players</h2>
        <div className="flex justify-between">
          <div className="column player">
            <label for="username1" className="player-label">
              Player One
            </label>
            <div className="row player-inputs">
              <input
                type="text"
                id="username1"
                autoComplete="off"
                className="input-light"
                placeholder="github username"
                onChange={(event) => this.handleChange(event, "player1")}
              />
              <button onClick={() => this.handleClick("click1")} className="">
                SUBMIT
              </button>
            </div>
          </div>
          <div className="column player">
            <label for="username2" className="player-label">
              Player Two
            </label>
            <div className="row player-inputs">
              <input
                type="text"
                id="username2"
                autoComplete="off"
                className="input-light"
                placeholder="github username"
                onChange={(event) => this.handleChange(event, "player2")}
              />
              <button onClick={() => this.handleClick("click2")} className="">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
        {this.state.click1 && this.state.click2 ? (
          <Link to="/battle/final">
            <button>Battle</button>
          </Link>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Battle;
