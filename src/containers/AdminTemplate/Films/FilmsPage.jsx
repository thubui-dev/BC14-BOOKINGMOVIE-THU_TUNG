import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actDeleteFilm, actFetchShowFilm } from "./modules/actions";
import "./films.css";
import Search from "./Search";
import {
  EditOutlined,
  DeleteOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import ROUTES from "../../../routes";

function FilmsPage(props) {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.showFilmReducer);

  useEffect(() => {
    const fetchData = () => {
      dispatch(actFetchShowFilm());
    };
    fetchData();
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(actDeleteFilm(id));
  };

  return (
    <>
      <h3>Quản lý phim</h3>
      <button className="btn btn-warning addFilmBtn">
        <NavLink
          to={`${ROUTES.dashboard}${ROUTES.addFilm}`}
          className="cursor-pointer"
        >
          Add film
        </NavLink>
      </button>
      <Search />
      <div className="row">
        <div className="col-md-12">
          <table className="table">
            <thead>
              <tr>
                <td>Mã phim</td>
                <td>Hình ảnh</td>
                <td>Tên phim</td>
                <td className="descripFilm">Mô tả</td>
                <td>Hành động</td>
              </tr>
            </thead>
            <tbody>
              {data?.map((item) => (
                <tr key={item.maPhim}>
                  <td>{item.maPhim}</td>
                  <td>
                    <img className="listFilm" src={item.hinhAnh} alt="" />
                  </td>
                  <td>{item.tenPhim}</td>
                  <td>
                    {item.moTa.lenght > 50
                      ? item.moTa.substr(0, 50) + "..."
                      : item.moTa}
                  </td>
                  <td>
                    <NavLink
                      to={`${ROUTES.dashboard}${ROUTES.editFilm}/${item.maPhim}`}
                      className="cursor-pointer"
                    >
                      <EditOutlined style={{color: 'blue'}}/>
                    </NavLink>

                    <span
                      onClick={() => {
                        if (
                          window.confirm(
                            "Bạn có chắc muốn xóa phim " + item.tenPhim
                          )
                        ) {
                          handleDelete(item.maPhim);
                        }
                      }}
                    >
                      <DeleteOutlined style={{color: 'red'}}/>
                    </span>
                    <NavLink to={`${ROUTES.dashboard}${ROUTES.showTime}/${item.maPhim}`}>
                      <CalendarOutlined  style={{color: 'green'}}/>
                    </NavLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default FilmsPage;
