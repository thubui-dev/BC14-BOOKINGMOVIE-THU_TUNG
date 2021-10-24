import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { actFetchDetailMovie } from "./Modules/actions";
import Loader from "../../../component/Loader";
import Modal from '../_components/Modal/Modal'
import "./DetailMovie.css";
import ModalTrailer from "../_components/Modal/ModalTrailer"

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
  }, [id]);

  if (loading) return <Loader />;

  return (
    <div className="detailMovie">
      <div className="container">
        <h3 className='detailMovie-title'>Nội Dung Phim</h3>
        <div className="row">
          <div className="col-md-3">
            <img className="detailMovie-img" src={data && data.hinhAnh} alt='' />
          </div>
          <div className="col-md-9">
            <h3 className="detailMovie-title">{data?.tenPhim}</h3>
            <div>
              <span className='detailMovie-bold'>Ngày khởi chiếu: </span>
              <span>
                {new Date(data?.ngayKhoiChieu).toLocaleDateString()}
              </span>
            </div>
            <div>
              <span className='detailMovie-bold'>Mô tả: </span>
              <span>{data?.moTa}</span>
            </div>
            <div className="detailMovie-modal">
              <Modal />
              <ModalTrailer />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailMoviePage;
