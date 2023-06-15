"use client";

import { SearchManufacter } from "./";

const SearchBar = () => {
  const handleForm = () => {};
  return (
    <form className="searchbar" onSubmit={handleForm}>
      <div className="searchbar__items">
        <SearchManufacter />
      </div>
    </form>
  );
};

export default SearchBar;
