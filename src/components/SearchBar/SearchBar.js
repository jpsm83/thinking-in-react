import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = {
    input: '',
  };

  handleSearch = async (event) => {
    await this.setState({
      input: event.target.value,
    });
    // uses the father method props.filteredProducts and pass the 'input' to it
    this.props.filteredProducts(this.state.input);
  };

  render() {
    return (
      <>
        <h2>Search</h2>
        <input
          className="search-bar"
          type="text"
          value={this.state.input}
          onChange={this.handleSearch}
        />
      </>
    );
  }
}