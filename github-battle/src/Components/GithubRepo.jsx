import React from "react";
import Loader from "./Loader";
import AllCard from "./AllCard";

class GithubRepo extends React.Component {
  constructor() {
    super();
    this.state = {
      tag: "all",
      data: null,
    };
  }

  componentDidMount() {
    this.fetchData("all");
  }

  //   componentDidUpdate() {
  //     this.fetchData(this.state.tag);
  //   }

  fetchData = (tag) => {
    fetch(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:${tag}&sort=stars&order=desc&type=Repositories`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ data: data.items }));
  };

  handleClick = ({ target }) => {
    const id = target.dataset.id;
    this.setState({ tag: id });
    this.fetchData(id);
  };

  render() {
    return (
      <>
        <ul
          className={
            this.props.darkMode
              ? "darkH2 menu flex justify-center"
              : "menu flex justify-center"
          }
        >
          <li>
            <h2
              data-id="all"
              onClick={this.handleClick}
              className={this.state.tag === "all" ? "active" : ""}
            >
              All
            </h2>
          </li>
          <li>
            <h2
              data-id="javascript"
              onClick={this.handleClick}
              className={this.state.tag === "javascript" ? "active" : ""}
            >
              Javascript
            </h2>
          </li>
          <li>
            <h2
              data-id="ruby"
              onClick={this.handleClick}
              className={this.state.tag === "ruby" ? "active" : ""}
            >
              Ruby
            </h2>
          </li>
          <li>
            <h2
              data-id="java"
              onClick={this.handleClick}
              className={this.state.tag === "java" ? "active" : ""}
            >
              Java
            </h2>
          </li>
          <li>
            <h2
              data-id="css"
              onClick={this.handleClick}
              className={this.state.tag === "css" ? "active" : ""}
            >
              CSS
            </h2>
          </li>
          <li>
            <h2 data-id="python" onClick={this.handleClick}>
              Python
            </h2>
          </li>
        </ul>
        {this.state.data ? (
          <AllCard data={this.state.data} darkMode={this.props.darkMode} />
        ) : (
          <Loader />
        )}
      </>
    );
  }
}

export default GithubRepo;
