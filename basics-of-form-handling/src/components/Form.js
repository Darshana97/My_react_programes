import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      message: "",
      topics: "",
    };
  }

  changeName = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  changeMessage = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  changeTopics = (event) => {
    this.setState({
      topics: event.target.value,
    });
  };

  submitForm = (event) => {
    alert(`${this.state.userName} ${this.state.message} ${this.state.topics}`);
    event.preventDefault()
  };

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={this.state.userName}
            onChange={this.changeName}
          ></input>
        </div>

        <div>
          <label>Message:</label>
          <textarea
            value={this.state.message}
            onChange={this.changeMessage}
          ></textarea>
        </div>

        <div>
          <label>Topics:</label>
          <select value={this.state.topics} onChange={this.changeTopics}>
            <option>React</option>
            <option>Angular</option>
            <option>Vue</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
