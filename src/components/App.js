import React, { Component, useState, setState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      message:
        "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy",
      visible: false
    };
  }

  render() {
    return (
      <div id="main">
        <button
          id="click"
          onClick={() =>
            this.setState({
              visible: true
            })
          }
        >
          button
        </button>
        {this.state.visible && <p id="para">{this.state.message}</p>}
      </div>
    );
  }
}

export default App;
