import React, { useEffect, useState } from "react";
import ListBox from "./ListBox";
import { SearchArea, SearchContainer } from "./style";

function SearchBox({
  label = "Search",
  placeholder = "Search text",
  suggestionLimit = 5,
  suggestionsApi = "",
  autoFill = true,
}) {
  const [suggestionsList, setSuggestionsList] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    getSuggestionsList()
  }, [searchText]);

  const getSuggestionsList = async () => {
    try {
      const result = await fetch(`https://swapi.dev/api/people/?search=${searchText}`)
      if(!result.ok) throw new Error(result.statusText)

      const data = await result.json();
      if (data && data.results?.length) {
          setSuggestionsList(data.results)
      }

    } catch (err) {
      console.log(err)
    }
    
  }

  return (
    <SearchContainer>
      <SearchArea>
        <label>{label}</label>
        <input 
        type="text" 
        value={searchText} 
        placeholder={placeholder} 
        onChange={(e) => setSearchText(e.target.value)}
        />
        {suggestionsList.length > 0 &&
          <ListBox list={suggestionsList} />}
      </SearchArea>
    </SearchContainer>
  );
}

export default SearchBox;
