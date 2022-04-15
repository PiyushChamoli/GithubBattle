import React from "react";
import { Route } from "react-router-dom";
import Header from "./Header";
import GithubRepo from "./GithubRepo";
import GithubBattle from "./GithubBattle";
import BattleResult from "./BattleResult";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      player1: "",
      player2: "",
      data1: "",
      data2: "",
      click1: false,
      click2: false,
      darkMode: false,
    };
  }

  handleChange = (event, id) => {
    this.setState({ [id]: event.target.value });
  };

  handleClose = (id) => {
    if (id === "player1") {
      this.setState({ [id]: "", data1: "", click1: false });
    } else {
      this.setState({ [id]: "", data2: "", click2: false });
    }
  };

  toggleDarkMode = () => {
    this.setState((prevState) => ({ darkMode: !prevState.darkMode }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let id = event.target.dataset.id;
    fetch(`https://api.github.com/users/${this.state[id]}`)
      .then((res) => res.json())
      .then((data) => {
        if (id === "player1") {
          this.setState({ [id]: "", data1: data, click1: true });
        } else {
          this.setState({ [id]: "", data2: data, click2: true });
        }
      });
  };

  render() {
    return (
      <div className={this.state.darkMode ? "dark_bg" : "light_bg"}>
        <div className="container">
          <Header toggleDarkMode={this.toggleDarkMode} {...this.state} />

          <Route path="/" exact>
            <GithubRepo {...this.state} />
          </Route>

          <Route path="/battle" exact>
            <GithubBattle
              {...this.state}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              handleClose={this.handleClose}
            />
          </Route>

          <Route path="/battle/final">
            <BattleResult {...this.state} />
          </Route>
        </div>
      </div>
    );
  }
}

export default App;
