import React, { Component, useState, setState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
  }

  render() {
    return (
      <div id="main">
        <button
          id="click"
          onClick={() =>
            this.setState({
              message:
                "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
            })
          }
        >
          button
        </button>
        <p id="para">{this.state.message}</p>
      </div>
    );
  }
}

export default App;
