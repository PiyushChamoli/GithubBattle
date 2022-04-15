import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

function Players(props) {
  return (
    <>
      <h2>Players</h2>
      <div className="flex justify-between">
        <form
          className={props.click1 ? "hidden" : "column player"}
          onSubmit={(e) => props.handleSubmit(e)}
          data-id="player1"
        >
          <label htmlFor="username1" className="player-label">
            Player One
          </label>
          <div className="row player-inputs">
            <input
              type="text"
              data-id="username1"
              autoComplete="off"
              className={props.darkMode ? "handle_input_dark" : "input-light"}
              placeholder="github username"
              onChange={(event) => props.handleChange(event, "player1")}
            />
            <button className="">SUBMIT</button>
          </div>
        </form>
        <div
          className={
            props.click1 ? "visible box player align-center" : "hidden"
          }
        >
          <div className="align-center">
            <img src={props.data1.avatar_url} alt="player1" />
            <h3>{props.data1.login}</h3>
          </div>
          <div onClick={() => props.handleClose("click1")}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </div>
        </div>
        <form
          className={props.click2 ? "hidden" : "column player"}
          onSubmit={props.handleSubmit}
          data-id="player2"
        >
          <label htmlFor="username2" className="player-label">
            Player Two
          </label>
          <div className="row player-inputs">
            <input
              type="text"
              id="username2"
              autoComplete="off"
              className="input-light"
              placeholder="github username"
              onChange={(event) => props.handleChange(event, "player2")}
            />
            <button className="">SUBMIT</button>
          </div>
        </form>
        <div
          className={
            props.click2 ? "visible box player align-center" : "hidden"
          }
        >
          <div className="align-center">
            <img src={props.data2.avatar_url} alt="player2" />
            <h3>{props.data2.login}</h3>
          </div>
          <div onClick={() => props.handleClose("click2")}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </div>
        </div>
      </div>
      <div className="flex-center">
        {props.click1 && props.click2 ? (
          <Link to="/battle/final">
            <button className="btn mart">Battle</button>
          </Link>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Players;
