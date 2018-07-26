import React, { Component } from 'react';
import { Button, ListGroupItem, ListGroup } from 'react-bootstrap';

export default class App extends Component {
  state = {
    data: []
  }

  handleClick = () => {
    const p = prompt();
    this.setState(({ data }) => ({ data: [...data, p] }));
  }

  remove = (position) => {
    this.setState(({ data }) => {
      data.splice(position, 1);
      return { data };
    });
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <ListGroup>
          {data.length === 0 ? (
            <ListGroupItem><i>Nothing added</i></ListGroupItem>
          ) : data.map((item, i) => (
            <ListGroupItem key={i}>
              {item}
              <a onClick={() => this.remove(i)} style={{ float: 'right' }}>Remove</a>
            </ListGroupItem>
          ))}
        </ListGroup>
        <Button onClick={this.handleClick}>Add</Button>
      </div>
    )
  }
}
