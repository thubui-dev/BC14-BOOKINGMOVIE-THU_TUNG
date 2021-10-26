import React, { useEffect } from "react";
import { Form, Button } from "antd";
import { Select, DatePicker, InputNumber } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { actShowTime, actCumRap, actTaoLichChieu } from "./modules/actions";
import { useFormik } from "formik";
import moment from "moment";

export default function ShowTime(props) {
  const formik = useFormik({
    initialValues: {
      maPhim: props.match.params.id,
      ngayChieuGioChieu: "",
      maRap: "",
      giaVe: "",
    },
    onSubmit: (values) => {
        dispatch(actTaoLichChieu({
            ...values,
            maPhim: + values.maPhim, // convert string to number 
        }));
    },
  });
  const { heThongRap, cumRap } = useSelector((state) => state.showTimeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actShowTime());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleChonHeThong = (value) => {
    dispatch(actCumRap(value));
  };
  const handleChonCumRap = (value) => {
    formik.setFieldValue("maRap", value);
  };
  const onChangeDate = (value) => {
    formik.setFieldValue(
      "ngayChieuGioChieu",
      moment(value).format("DD/MM/YYYY hh:mm:ss")
    );
  };
  const onOk = (value) => {};
  const onChangeInputNumber = (value) => {
    formik.setFieldValue("giaVe", value);
  };

  console.log(props.match.params);
  
  return (
    <div className="container">
      <Form
        onSubmitCapture={formik.handleSubmit}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <h3>Lịch chiếu phim - {props.match.params.tenPhim}</h3>
        <Form.Item label="Hệ thống rạp">
          <Select
            options={heThongRap?.map((item, index) => {
              return { label: item.tenHeThongRap, value: item.maHeThongRap };
            })}
            onChange={handleChonHeThong}
            placeholder="Chọn hệ thống rạp"
          />
        </Form.Item>
        <Form.Item label="Cụm rạp">
          <Select
            options={cumRap?.map((item, index) => {
              return { label: item.tenCumRap, value: item.maCumRap };
            })}
            onChange={handleChonCumRap}
            placeholder="Chọn cụm rạp"
          />
        </Form.Item>
        <Form.Item label="Ngày giờ chiếu, giờ chiếu">
          <DatePicker
            format="DD/MM/YYYY hh:mm:ss"
            showTime
            onChange={onChangeDate}
            onOk={onOk}
          />
        </Form.Item>
        <Form.Item label="Giá vé">
          <InputNumber onChange={onChangeInputNumber} />
        </Form.Item>
        <Form.Item label="Nhấn chọn">
          <Button htmlType="submit">Tạo lịch chiếu</Button>
        </Form.Item>
      </Form>
    </div>
  );
}
