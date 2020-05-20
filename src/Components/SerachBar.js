import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    term: '',
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    // Callback passed to App.js
    this.props.onFormSubmit(this.state.term); //This will tell the parent component what the search term is
  };

  render() {
    return (
      <div className="ui segment search-bar">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>

            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })} //this will put everything we type in text input to term
            />
          </div>

          <button className="ui primary button" type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
