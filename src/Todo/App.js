import React, { Component } from 'react';
import { Button, ListGroupItem, ListGroup, FormControl } from 'react-bootstrap';

export default class App extends Component {
  state = {
    data: [],
    todo: ''
  }

  handleClick = () => {
    this.setState(({ data, todo }) => todo !== '' ? ({ data: [...data, todo], todo: '' }) : null);
  }

  remove = (position) => {
    this.setState(({ data }) => {
      data.splice(position, 1);
      return { data };
    });
  }

  todoChange = (e) => {
    this.setState({ todo: e.target.value });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.todoChange(e);
      this.handleClick();
    }
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
        <FormControl
          type="text"
          placeholder="Enter new todo"
          onChange={this.todoChange}
          onKeyPress={this.handleKeyPress}
          value={this.state.todo}
        />
        <Button onClick={this.handleClick}>Add</Button>
      </div>
    )
  }
}
