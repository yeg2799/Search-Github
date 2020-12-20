import React, { Component } from "react";

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,Container,Alert
} from 'reactstrap';
export default class ListUser extends Component {
  render() {
    return (
      <div>
       <h1>Profile</h1>
      <Container>
      <Card width="10%">
        <CardImg src={this.props.getUser.avatar_url} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{this.props.getUser.login}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{this.props.getUser.location}</CardSubtitle>
          <CardText>{this.props.getUser.bio}</CardText>

          <Alert color="primary">
          Followers:{this.props.getUser.followers}
          </Alert>
          <Alert color="success">
          Followers:{this.props.getUser.following}
          </Alert>
          
         
          <Button href={this.props.getUser.html_url} color="primary" onClick={()=>window.open('_blank')}> Follow</Button>
        </CardBody>
      </Card>
      </Container>
       
      </div>
    );
  }
}