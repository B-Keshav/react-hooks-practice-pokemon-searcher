import React from "react";

function Search({handleSearch}) {
  
  function onSearchChange(e){
    handleSearch(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={onSearchChange} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
