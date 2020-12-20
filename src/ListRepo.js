import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
export default class ListRepo extends Component {
   
   
    render() {
        return (
            <div>
               <h1>repos</h1>
               <ListGroup>
                   {this.props.getRepos.map((repo)=>(
                    <ListGroupItem >{repo.full_name}</ListGroupItem>
                   ))}
               </ListGroup>
            </div>
        )
    }
}
