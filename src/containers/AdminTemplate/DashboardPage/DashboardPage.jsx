import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actDeleteUser, actGetUser } from "./modules/actions";
import { NavLink } from "react-router-dom";
import ROUTES from "../../../routes";
import SearchUser from "./SearchUser/SearchUser";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

function DashboardPage(props) {
 const dispatch = useDispatch();
  const { data } = useSelector((state) => state.getUserReducer);

  useEffect(() => {
    const fetchData = () => {
      dispatch(actGetUser());
    };
    fetchData();
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(actDeleteUser(id));
  };
  return (
    <>
      <h3>Quản lý người dùng</h3>
      <button className="btn btn-warning addFilmBtn">
        <NavLink
          to={`${ROUTES.dashboard}${ROUTES.addUser}`}
          className="cursor-pointer"
        >
          Add User
        </NavLink>
      </button>
      <SearchUser />
      <div className="row">
        <div className="col-md-12">
          <table className="table">
            <thead>
              <tr>
                <td>Tài khoản</td>
                <td>Họ tên</td>
                <td>Email</td>
                <td>Mật khẩu</td>
                <td>Số điện thoại</td>
                <td>Loại người dùng</td>
                <td>Chức năng</td>
              </tr>
            </thead>
            <tbody>
              {data?.map((item) => (
                <tr key={item.taiKhoan}>
                  <td>{item.taiKhoan}</td>
                  <td>{item.hoTen}</td>
                  <td>{item.email}</td>
                  <td>{item.soDt}</td>
                  <td>{item.matKhau}</td>
                  <td>{item.maLoaiNguoiDung}</td>
                  <td>
                    <NavLink
                      to={`${ROUTES.dashboard}${ROUTES.editUser}/${item.taiKhoan}`}
                      className="cursor-pointer"
                    >
                      <EditOutlined style={{ color: "blue" }} />
                    </NavLink>

                    <span
                      onClick={() => {
                        if (
                          window.confirm(
                            "Bạn có chắc muốn người dùng " + item.hoTen
                          )
                        ) {
                          handleDelete(item.taiKhoan);
                        }
                      }}
                    >
                      <DeleteOutlined style={{ color: "red" }} />
                    </span>
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

export default DashboardPage;
