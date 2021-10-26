import React, { useEffect, useState } from "react";
import { Form, Input, Radio, DatePicker, InputNumber, Switch } from "antd";
import "antd/dist/antd.css";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import { actEditFilm, actEditUploadApi } from "./modules/actions";
import moment from "moment";
import { useHistory } from "react-router";
import ROUTES from "../../../../routes";

const Edit = (props) => {
  const [componentSize, setComponentSize] = useState("default");
  const [img, setImg] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.editFilmReducer);

  useEffect(() => {
    let { id } = props.match.params;
    dispatch(actEditFilm(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maPhim: data?.maPhim,
      tenPhim: data?.tenPhim,
      trailer: data?.trailer,
      moTa: data?.moTa,
      ngayKhoiChieu: data?.ngayKhoiChieu,
      dangChieu: data?.dangChieu,
      sapChieu: data?.sapChieu,
      hot: data?.hot,
      danhGia: data?.danhGia,
      hinhAnh: null,
      maNhom: "GP14",
    },

    onSubmit: (values) => {
      values.maNhom = "GP14";
      let formData = new FormData();
      for (let key in values) {
        formData.append(key, values[key]);
      }
      if (values.hinhAnh !== null) {
        formData.append("File", values.hinhAnh, values.hinhAnh.name);
      }
      //Upload edit film
      dispatch(actEditUploadApi(formData));

    
      history.push(`${ROUTES.dashboard}${ROUTES.films}`);
    },
  });

  const handleChangeDatePicker = (value) => {
    //   console.log('datepickerchange',moment(value).format('DD/MM/YYYY'));
    let ngayKhoiChieu = moment(value);
    formik.setFieldValue("ngayKhoiChieu", ngayKhoiChieu);
  };

  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeFile = async (event) => {
    let file = event.target.files[0];
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/png"
    ) {
      await formik.setFieldValue("hinhAnh", file);
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        setImg(event.target.result);
      };
    }
  };

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <>
      <Form
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <h3>Edit film</h3>
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Tên phim">
          <Input
            name="tenPhim"
            onChange={formik.handleChange}
            value={formik.values.tenPhim}
          />
        </Form.Item>
        <Form.Item label="Trailer">
          <Input
            name="trailer"
            onChange={formik.handleChange}
            value={formik.values.trailer}
          />
        </Form.Item>
        <Form.Item label="Mô tả">
          <Input
            name="moTa"
            onChange={formik.handleChange}
            value={formik.values.moTa}
          />
        </Form.Item>
        <Form.Item label="Ngày khởi chiếu">
          <DatePicker
            format={"DD/MM/YYYY"}
            onChange={handleChangeDatePicker}
            value={moment(formik.values.ngayKhoiChieu)}
          />
        </Form.Item>
        <Form.Item label="Đang chiếu">
          <Switch
            onChange={handleChangeSwitch("dangChieu")}
            checked={formik.values.dangChieu}
          />
        </Form.Item>
        <Form.Item label="Sắp chiếu">
          <Switch
            onChange={handleChangeSwitch("sapChieu")}
            checked={formik.values.sapChieu}
          />
        </Form.Item>
        <Form.Item label="Hot">
          <Switch
            onChange={handleChangeSwitch("hot")}
            checked={formik.values.hot}
          />
        </Form.Item>
        <Form.Item label="Số sao">
          <InputNumber
            onChange={handleChangeSwitch("danhGia")}
            min={1}
            max={10}
            value={formik.values.danhGia}
          />
        </Form.Item>
        <Form.Item label="Hình ảnh">
          <input
            type="file"
            onChange={handleChangeFile}
            accept="image/png, image/jpeg, image/png"
          />
          <br />
          <img
            style={{ withd: 200, height: 150 }}
            src={img === "" ? data?.hinhAnh : img}
            alt=""
          />
        </Form.Item>
        <Form.Item label="Tác vụ">
          <button type="submit" className="bg-green-300 p-2">
            Edit film
          </button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Edit;
