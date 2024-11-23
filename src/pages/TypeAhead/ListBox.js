import React from "react";
import { ListContainer, ListItem } from "./style";

function ListBox({ list, activeIndex }) {
  return (
    <ListContainer>
      {list.map((item, index) => (
        <ListItem 
        key={index}
        active={""+(index === activeIndex)}>{item}</ListItem>
      ))}
    </ListContainer>
  );
}

export default ListBox;
