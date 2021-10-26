import React, { useEffect, useState } from "react";
import { Form, Input, Button, Select } from "antd";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { actEditUploadUser } from "./modules/actions";
import { toast } from "react-toastify";
import ROUTES from "../../../../routes";
import { useParams } from "react-router-dom";

export default function EditUser() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.getUserReducer);
  const { taiKhoan } = useParams();
  const [state, setState] = useState({});

  useEffect(() => {
    const editUser = data.find(user => user.taiKhoan === taiKhoan);
    if (editUser) {
      setState(editUser)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  console.log(state);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const onSelect = (selectedValue) => {
    setState({
      ...state,
      maLoaiNguoiDung: selectedValue,
    });
  };

  const handleEditUser = (event) => {
    event.preventDefault();
    dispatch(actEditUploadUser(state));

    toast("Edit user success");
    history.push(`${ROUTES.dashboard}`);
  };

  return (
    <div className="container">
      <h3>Edit user</h3>
      <Form>
        <Form.Item label="Họ và Tên">
          <Input name="hoTen" onChange={handleOnChange} value={state?.hoTen} />
        </Form.Item>
        <Form.Item label="Tài khoản">
          <Input
            name="taiKhoan"
            onChange={handleOnChange}
            value={state?.taiKhoan}
          />
        </Form.Item>
        <Form.Item label="Email">
          <Input name="email" onChange={handleOnChange} value={state?.email} />
        </Form.Item>
        <Form.Item label="Mật khẩu">
          <Input
            name="matKhau"
            onChange={handleOnChange}
            value={state?.matKhau}
          />
        </Form.Item>
        <Form.Item label="Số điện thoại">
          <Input name="soDt" onChange={handleOnChange} value={state?.soDt} />
        </Form.Item>
        <Form.Item label="Loại người dùng">
          {state?.maLoaiNguoiDung && <Select
            options={[
              { label: "Khách hàng", value: "KhachHang" },
              { label: "Quản trị", value: "Admin" },
            ]}
            name="maLoaiNguoiDung"
            onChange={onSelect}
            selectedvalue={state?.maLoaiNguoiDung}
            defaultValue={state?.maLoaiNguoiDung}
          />}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={handleEditUser}>
            Edit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
