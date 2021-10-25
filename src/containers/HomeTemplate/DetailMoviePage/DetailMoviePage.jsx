import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { actFetchDetailMovie } from "./Modules/actions";
import Loader from "../../../component/Loader";
import Modal from '../_components/Modal/Modal'
import "./DetailMovie.css";

function DetailMoviePage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.detailMovieReducer);


  const fetchData = () => {
    dispatch(actFetchDetailMovie(id));
    // dispatch(actFetchShowingMovie(id));
  };

  useEffect(() => {
    fetchData(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="detailMovie">
      <div className="container">
        <h3>Nội Dung Phim</h3>
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid" src={data && data.hinhAnh} alt="" />
          </div>
          <div className="col-md-6">
            <table className="table">
              <tbody>
                <tr>
                  <td>Tên phim</td>
                  <td>{data?.tenPhim}</td>
                </tr>
                <tr>
                  <td>Mô tả</td>
                  <td>{data?.moTa}</td>
                </tr>
              </tbody>
            </table>
            <Modal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailMoviePage;
