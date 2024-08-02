import React from 'react'
import { CircleCSS } from './style'

function Circle({num}) {
    console.log(num)
  return (
    <CircleCSS num={num}>
        {num > 1 && <Circle num={num-1} />}
    </CircleCSS>
  )
}

export default Circle