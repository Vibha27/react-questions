import React from 'react'
import Slides from './Slides'
import { SLIDES_DATA } from './constants'

export const Slider = () => {
    return <Slides slides={SLIDES_DATA} />
}