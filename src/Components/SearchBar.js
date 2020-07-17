import React, { useState } from "react";

const SearchBar = ({ labelText, onSubmit }) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  return (
    <div>
      <div className="ui segment">
        <form className="ui form" onSubmit={onFormSubmit}>
          <label htmlFor="searchBar">{labelText}</label>
          <input
            id="searchBar"
            type="text"
            placeholder="Search..."
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
