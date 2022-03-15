import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "./Form.module.css";

const Form = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.searchResult);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    try {
      dispatch({ type: "SET_LOADING" });
      const {
        data: { items },
      } = await axios.get(
        `https://api.github.com/search/users?q=${searchTerm}`
      );
      dispatch({ type: "SET_SEARCH", payload: items });
      localStorage.setItem("SET_SEARCH", JSON.stringify(items));
    } catch (err) {
      console.log(err);
    } finally {
      dispatch({ type: "CLEAR_LOADING" });
      setSearchTerm("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };
  const handleClickClean = () => {
    setSearchTerm("");
    dispatch({ type: "CLEAN_SEARCH" });
  };

  return (
    <form className={styled.form} onSubmit={handleSubmit}>
      <input
        className={`${styled.item} ${styled.input}`}
        placeholder="Search Users ..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className={`${styled.item} ${styled.btnDark}`} type="submit">
        Submit
      </button>
      {users.length !== 0 && (
        <button
          className={`${styled.item} ${styled.btnLight}`}
          type="reset"
          onClick={handleClickClean}
        >
          Clear
        </button>
      )}
    </form>
  );
};

export default Form;
