import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { actGetUser, actSearchUser } from "../modules/actions";
import "./SearchUser.css";

export default function SearchUser() {
  const [keyWord, setKeyword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
      if(keyWord === "") {
        dispatch(actGetUser())
      }
  }, [keyWord, dispatch]);

  const handleOnChange = (event) => {
    setKeyword(event.target.value);
  };
  const handleOnSearch = () => {
    dispatch(actSearchUser(keyWord.toLowerCase().trim()));
  }
    return (
        <div className="searchForm">
        <input
          value={keyWord}
          type="text"
          className="form-control mb-3 w-50"
          placeholder="Nhập thông tin tài khoản"
          onChange={handleOnChange}
        />
        <button className="btn btn-primary searchForm--btn" onClick={handleOnSearch} disabled={keyWord === ""} >Search</button>
      </div>
    )
}
