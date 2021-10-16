import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { actFetchDetailMovie, actFetchShowingMovie } from "./Modules/actions";
import Loader from "../../../component/Loader";
import "./DetailMovie.css";

function DetailMoviePage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.detailMovieReducer);

  const fetchData = () => {
    dispatch(actFetchDetailMovie(id));
    dispatch(actFetchShowingMovie(id));
  };

  useEffect(() => {
    fetchData(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="detailMovie">
      <div className="container">
        <h3>Movie Details</h3>
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
          </div>
        </div>
      </div>
      {/* <div className="row">
        <div className="col-md-12">
          <table className="table">
            <thead>
              <tr>
                <td>Cụm rạp</td>
                <td>Tên rạp</td>
                <td>Ngày chiếu</td>
                <td>Giờ chiếu</td>
              </tr>
            </thead>
            <tbody>
              {data?.lichChieu?.map((item) => (
                <tr key={item.maLichChieu}>
                  <td>{item.thongTinRap.tenCumRap}</td>
                  <td>{item.thongTinRap.tenRap}</td>
                  <td>
                    {new Date(item.ngayChieuGioChieu).toLocaleDateString()}
                  </td>
                  <td>
                    {new Date(item.ngayChieuGioChieu).toLocaleTimeString()}
                  </td>
                  <td>
                    <a href="#dat-ve" className="btn btn-success">
                      Booking
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div> */}
    </div>
  );
}

export default DetailMoviePage;
