import React, { useState } from "react";
import axios from "axios";
import ListBox from "./ListBox";
import { SearchArea, SearchContainer } from "./style";

function SearchBox({
  api,
  responseKey,
  label,
  placeholder = "Enter text to search",
  suggesstionLength = 5,
  sleep,
  handleSelect,
}) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const [searchResults, setSearchRsults] = useState([]);

  const onSearch = async (text) => {
    const response = await axios.get(`${api + text}`);
    setSearchRsults(
      response.data[responseKey]
        ?.slice(0, suggesstionLength)
        .map((books) => books.title)
    );
  };
  
  const handleSetQuery = (e) => {
    let { value } = e.target;
    setQuery(value);
    onSearch(value);
    setActiveIndex(-1)
  };

  const handleKeyDown = (e) => {
    const key = e.key;

    if (key === "ArrowUp") {
      setActiveIndex((prevIndex) => {
        const newIndex = prevIndex <= 0 ? suggesstionLength - 1 : prevIndex - 1;
        setQuery(searchResults[newIndex] || query);
        return newIndex;
      });
    } else if (key === "ArrowDown") {
      setQuery(e.target.value);
      setActiveIndex((prevIndex) => {
        const newIndex = prevIndex < suggesstionLength-1 ? prevIndex + 1 : 0;
        setQuery(searchResults[newIndex] || query);
        return newIndex;
      });
    } else if (key === "Enter") {
      setQuery(e.target.value);
      handleSelect(e.target.value);
      setSearchRsults([]);
      setActiveIndex(-1)
    } else if (key === "Escape") {
      setSearchRsults([]);
      setActiveIndex(-1)
    }
  };

  return (
    <SearchContainer>
      <SearchArea>
      {label && <label>{label}</label>}
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleSetQuery}
        onKeyDown={handleKeyDown}
      />

      {searchResults.length > 0 && (
        <ListBox list={searchResults} activeIndex={activeIndex} />
      )}
      </SearchArea>

    </SearchContainer>
  );
}

export default SearchBox;
