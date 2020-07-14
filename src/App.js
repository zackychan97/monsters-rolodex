import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.js";

import "./App.css";

// Create a class component that sets state to an empty array
// titled monsters. Then when the componentDidMount() aka change
// the DOM, we will fetch to an API, then turn the response into
// JSON, then we will setState of monsters array to users.
// We will then render a div containing our CardList component.
// To the CardList component, we are injecting in props of this.state.monsters
class App extends Component {
  // Since we are using a class, we can create a way to access State:
  constructor() {
    super();

    this.state = {
      monsters: [],
      ourSearchField: "",
      // Can delete below if don't work
      emailSearch: "",
      websiteSearch: "",
      // Can delete above if don't work
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
    const { monsters, ourSearchField, emailSearch, websiteSearch } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(ourSearchField.toLowerCase())
    );
    // Can delete below if don't work
    const filteredEmails = monsters.filter((monster) =>
      monster.email.toLowerCase().includes(emailSearch.toLowerCase())
    );
    const filteredSites = monsters.filter((monster) =>
      monster.website.toLowerCase().includes(websiteSearch.toLowerCase())
    );
    // Can delete above if don't work
    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search Monsters"
          onChange={(e) => this.setState({ ourSearchField: e.target.value })}
        />
        {/* Can delete below if don't work */}
        <input
          type="search"
          placeholder="Search Emails"
          onChange={(e) => this.setState({ emailSearch: e.target.value })}
        />
        <input
          type="search"
          placeholder="Search Websites"
          onChange={(e) => this.setState({ websiteSearch: e.target.value })}
        />
        {/* Can delete above if don't work */}
        <CardList
          monsters={(filteredMonsters, filteredEmails, filteredSites)}
        ></CardList>
      </div>
    );
  }
}

export default App;
