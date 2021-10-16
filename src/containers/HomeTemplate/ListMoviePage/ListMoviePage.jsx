import React, { useEffect } from "react";
import Loader from "../../../component/Loader";
import Movie from "./Movie";
import { actFetchListMovie } from "./modules/actions";
import { connect } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ListMoviePage.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={style} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={style} onClick={onClick} />;
}

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3,
  speed: 500,
  rows: 2,
  // slidesPerRow: 2,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

function ListMoviePage(props) {
  const { data, loading, fetchData } = props;
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div className="detailStyle">
      <div className="container">
        <div className="row detailMovie">
          {loading ? (
            <Loader />
          ) : (
            <div className="detailMovie--slick">
              <Slider {...settings}>
                {data?.map((movie) => {
                  return <Movie key={movie.maPhim} movie={movie} />;
                })}
              </Slider>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.listMovieReducer.loading,
    data: state.listMovieReducer.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => {
      dispatch(actFetchListMovie());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMoviePage);
