import React from "react";
import style from "../components/MovieCard.module.css";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className={style.movieCard}>
      <Link to={"/movies/" + movie.id}>
        <img
          className="movieImage"
          width={230}
          height={345}
          src={imageUrl}
          alt={movie.title}
        />
      </Link>
      <div className={style.title}>{movie.title}</div>
    </li>
  );
}
