import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div>
        <div className="ui segment">
          <form className="ui form" onSubmit={this.onFormSubmit}>
            <label htmlFor="searchBar">{this.props.labelText}</label>
            <input
              id="searchBar"
              type="text"
              placeholder="Search..."
              value={this.state.term}
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
