import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.js";

import "./App.css";

class App extends Component {
  // Since we are using a class, we can create a way to access State:
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      // fetch gives us a promise, a promise of the response data
      // so we use .json() to give us that response in json so our javascript can understand it
      .then((response) => response.json())
      // then that will get returned to us as a new promise
      // which we will now have as the body, which is the users
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <CardList name="zack" hello="yo">
          {/* map() has 2 args, the state we want (monsters),   */}
          {this.state.monsters.map((monsters) => (
            <h1 key={monsters.id}>{monsters.name}</h1>
          ))}
        </CardList>
      </div>
    );
  }
}

export default App;
