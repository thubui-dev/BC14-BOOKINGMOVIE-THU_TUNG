import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { actFetchShowFilm, actSearchFilm } from "../../Films/modules/actions";
import "./search.css";

export default function Search() {
  const [keyWord, setKeyword] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
      if(keyWord === "") {
        dispatch(actFetchShowFilm())
      }
  }, [keyWord, dispatch]);

  const handleOnChange = (event) => {
    setKeyword(event.target.value);
  };
  const handleOnSearch = () => {
    dispatch(actSearchFilm(keyWord.toLowerCase().trim()));
  }
  return (
    <div className="searchForm">
      <input
        value={keyWord}
        type="text"
        className="form-control mb-3 w-50"
        onChange={handleOnChange}
      />
      <button className="btn btn-primary searchForm--btn" onClick={handleOnSearch} disabled={keyWord === ""}>Search</button>
    </div>
  );
}
