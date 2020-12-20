import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import ListRepo from "./ListRepo";
import ListUser from "./ListUser";
import SearchUser from "./SearchUser";
// import { Octokit } from "@octokit/core";
export default class App extends Component {
  state = {
    users: [],
    repos:[]
  };
  componentDidMount() {
    this.getUser();
    this.getRepos();
  }
  getUser = (username) => {
    fetch("https://api.github.com/users/" + username)
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }))
      .catch((err) => console.error(err));
  };
  getRepos = (username) => {
    fetch("https://api.github.com/users/"+username+"/repos")
      .then((response) => response.json())
      .then((data) => this.setState({ repos: data }))
      .catch((err) => console.error(err));
  };
  render() {
    return (
      <div>
        <Container>
          <SearchUser getUser={this.getUser} getRepos={this.getRepos}></SearchUser>

          <Row>
            <Col xs="4">
              {" "}
              <ListUser getUser={this.state.users}></ListUser>
            </Col>

            <Col xs="8">
                <ListRepo getRepos={this.state.repos}></ListRepo>
              
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
