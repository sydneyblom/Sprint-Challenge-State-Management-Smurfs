import React, { Component } from "react";

import "./App.css";

import GetSmurfs from "./GetSmurfs";
import Form from "./Form"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Smurfs</h1>
        <Form />
        <GetSmurfs />
      </div>
    );
  }
}

export default App;
