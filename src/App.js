import React, { Component } from "react";
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleSearch = (searchField) => {
    this.setState({ searchField });
  };

  render() {
    const { monsters, searchField } = this.state;
    let filteredMonsters;
    if (searchField) {
      filteredMonsters = monsters.filter((m) =>
        m.name.toLowerCase().includes(searchField.toLowerCase())
      );
    } else {
      filteredMonsters = monsters;
    }

    return (
      <div className="App">
        <h1 className="header">Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monster"
          value={searchField}
          onSearch={this.handleSearch}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
