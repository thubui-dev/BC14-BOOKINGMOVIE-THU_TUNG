import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actAddUser } from "./modules/actions";
import { Form, Input, Button, Select } from "antd";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import ROUTES from "../../../../routes";

export default function AddUsers() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    email: "",
    soDt: "",
    maNhom: "GP14",
    maLoaiNguoiDung: "",
  });

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

  const handleAddUser = (event) => {
    event.preventDefault();
    dispatch(actAddUser(state));

    toast("Add user success");
    history.push(`${ROUTES.dashboard}`);
  };

  return (
    <div className="container">
      <h3>Thêm người dùng</h3>
      <Form>
        <Form.Item label="Họ và Tên">
          <Input name="hoTen" onChange={handleOnChange} />
        </Form.Item>
        <Form.Item label="Tài khoản">
          <Input name="taiKhoan" onChange={handleOnChange} />
        </Form.Item>
        <Form.Item label="Email">
          <Input name="email" onChange={handleOnChange} />
        </Form.Item>
        <Form.Item label="Mật khẩu">
          <Input name="matKhau" onChange={handleOnChange} />
        </Form.Item>
        <Form.Item label="Số điện thoại">
          <Input name="soDt" onChange={handleOnChange} />
        </Form.Item>
        <Form.Item label="Loại người dùng">
          <Select
            options={[
              { label: "Khách hàng", value: "khachHang" },
              { label: "Quản trị", value: "Admin" },
            ]}
            name="maLoaiNguoiDung"
            onChange={onSelect}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={handleAddUser}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
