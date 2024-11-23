/**
 * Component architecture
 * 1. Search box component which accepts placeholder, label, number of suggesstions list, sleepTime, api, responseKey, handleSelect function
 * 2. Suggestion list which accepts item to be display
 * 3. Main form that will call search box
 * 4. Style
 */

import React from "react";
import SearchBox from "./SearchBox";
import { SearchContainer } from "./style";

function TypeAhead() {

  const handleSelect = (value) => {
    console.log(value)
  }

  return (
    <React.Fragment>
      <SearchContainer><h3>TypeAhead</h3></SearchContainer>
      <SearchBox
        api={"https://openlibrary.org/search.json?title="}
        responseKey="docs"
        placeholder="Search Book Name"
        suggesstionLength={5}
        handleSelect={handleSelect}
        sleep={500}
      />
    </React.Fragment>
  );
}

export default TypeAhead;
