import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
export default class SearchUser extends Component {
  state = {userName:""};
  onChangeHandle=(event)=>{
        this.setState({userName:event.target.value});
  }
  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="searchUser">User</Label>
            <Input
              type="text"
              name="userName"
              id="searchUser"
              placeholder="Search User"
              onChange={this.onChangeHandle}
            />
          </FormGroup>
          <FormGroup>
          <Button color="success" onClick={()=>{this.props.getUser(this.state.userName);this.props.getRepos(this.state.userName);}} size="lg" block>
            Search
          </Button>
          </FormGroup>
         
        </Form>
      </div>
    );
  }
}
