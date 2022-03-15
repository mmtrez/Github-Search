import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Form.css";

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
    <form onSubmit={handleSubmit}>
      <input
        className="item input"
        placeholder="Search Users ..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="item btn btn-submit" type="submit">
        Submit
      </button>
      {users.length !== 0 && (
        <button
          className="item btn btn-clear"
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
