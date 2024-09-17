import React from 'react'
import { ListContainer, ListItem } from './style'

function ListBox({ list }) {
  return (
    <ListContainer>
      {list.map((item, index) => (
        <ListItem key={index}>{item.name}</ListItem>
      ))} 
    </ListContainer>
  )
}

export default ListBox