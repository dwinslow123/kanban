import React, { Component } from 'react';

export default class NewTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.props.columnIndex, this.state.input);
    this.setState({ input: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.input}
          onChange={e => this.setState({ input: e.target.value })}
        />
      </form>
    );
  }
}
