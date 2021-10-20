import React from "react";
import { Link } from "react-router-dom";

import ROUTES from "../../../../routes";
import "./movie.css";

export default function Movie(props) {
  const { movie } = props;

  return (
    <div className="cardMovie">
      <img className="cardMovie--img" src={movie.hinhAnh} alt="" />
      <Link
        className="btn btn-success cardMovie--name"
        to={`${ROUTES.home}${ROUTES.movieDetail}/${movie.maPhim}`}
      >
        {movie.tenPhim}
      </Link>
    </div>
  );
}
