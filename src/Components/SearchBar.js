import { useState } from "react";

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <form className="search-form">
      <button>
        <i className="fa fa-search"></i>
      </button>
      <input
        type="text"
        placeholder="Rechercher un lieu"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      ></input>
    </form>
  );
}
