import React from "react";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeFork,
  faStar,
  faTriangleExclamation,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

class SingleLanguage extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "",
    };
  }

  componentDidMount() {
    let language = this.props.match.params.id;
    fetch(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:${language}&sort=stars&order=desc&type=Repositories`
    )
      .then((data) => data.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    if (!this.state.data) {
      return <Loader />;
    }
    let info = this.state.data.items;
    return (
      <ul className="main flex justify-between">
        {info.map((item, i) => (
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

export default SingleLanguage;
