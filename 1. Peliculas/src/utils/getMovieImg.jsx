import React from 'react'
import placeholder from "../img/placeholder.png"

export default function getMovieImg(path, width) {
  return path ? `https://image.tmdb.org/t/p/w${width}${path}`: placeholder
}