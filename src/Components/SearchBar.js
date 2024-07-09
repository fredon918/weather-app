import { useState } from "react";

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <form className="search-form">
      <input
        type="text"
        placeholder="Rechercher une ville ou un pays..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      ></input>
      <button>
        <i className="fa fa-search"></i>
      </button>
    </form>
  );
}
