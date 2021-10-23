import React from "react";
import { Link } from "react-router-dom";

import ROUTES from "../../../../routes";
import "./movie.css";

export default function Movie(props) {
  const { movie } = props;

  return (
    <div className="cardMovie">
      <Link
        className="btn btn-success cardMovie--name"
        to={`${ROUTES.home}${ROUTES.movieDetail}/${movie.maPhim}`}
      >
        <img className="cardMovie--img" src={movie.hinhAnh} alt="" />
        <p>
          {movie.tenPhim.length > 20 ? movie.tenPhim.slice(0, 15) + '...' : movie.tenPhim}
        </p>
      </Link>
    </div>
  );
}
