import React, { useEffect, useState } from "react";
import { get } from "../data/httpClient";
import { useParams } from "react-router-dom";
import getMovieImg from "../utils/getMovieImg";
import "../pages/MovieDetails.CSS"

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, SetMovie] = useState([]);
  const [generos, SetGeneros] = useState([]);

  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      SetMovie(data);
      SetGeneros(data.genres[0]);
    });
  }, [movieId]);

  const imageUrl = getMovieImg(movie.poster_path, 500);

  return (
    <div className="detailsContainer">
      <img src={imageUrl} alt={movie.title}  className="col movieImage"/>
      <div className="col movieDetails">
        <p className="title">
          <strong>Título: </strong>
          {movie.title}
        </p>
        <p>
          <strong>Género: </strong>
          {generos.name}
        </p>
        <p>
          <strong>Descripcion: </strong>
          {movie.overview}
        </p>
      </div>
    </div>
  );
}
