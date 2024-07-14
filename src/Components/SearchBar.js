import React, { useEffect, useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

export default function SearchBar({ onSubmitLocation }) {
  const [inputValue, setInputValue] = useState("");
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      getLocationsFromApiAsync(inputValue);
    }, 500);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [inputValue]);

  const getLocationsFromApiAsync = async (string) => {
    await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${string}&count=10&language=fr&format=json`
    )
      .then((response) => response.json())
      .then((data) => setLocations(data));
    console.log(locations);
  };

  const handleOnSearch = (event) => {
    setInputValue(event);
  };

  const handleOnSelect = (selectedLocation) => {
    console.log(selectedLocation);
    onSubmitLocation(selectedLocation);
  };

  const weatherFormatResult = (item) => {
    //TODO Sortir le style dans le fichier CSS
    return (
      <div>
        <span
          style={{
            display: "block",
            textAlign: "left",
            fontWeight: "bold",
          }}
        >
          {item.name}
        </span>
        <span
          style={{
            display: "block",
            textAlign: "left",
          }}
        >
          {item.admin1}, {item.country}
        </span>
      </div>
    );
  };

  return (
    <ReactSearchAutocomplete
      items={locations.results}
      onSearch={handleOnSearch}
      onSelect={handleOnSelect}
      formatResult={weatherFormatResult}
      placeholder="Rechercher un lieu"
      showNoResultsText="Aucun résultat"
      className="search-result"
      styling={{ borderRadius: 0 }}
    ></ReactSearchAutocomplete>

    // <form className="search-form" onSubmit={handleSubmit}>

    //   {/* <button>
    //     <i className="fa fa-search"></i>
    //   </button>
    //   <input
    //     type="text"
    //     placeholder="Rechercher un lieu"
    //     value={searchValue}
    //     onChange={(e) => getLocationFromApiAsync(e.target.value)}
    //   ></input> */}
    // </form>
  );
}
