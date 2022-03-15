import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import styled from "./GridCard.module.css";

const GridCard = ({ user: { login, avatar_url } }) => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      const { data: userInfo } = await axios.get(
        `https://api.github.com/users/${login}`
      );
      const { data: repos } = await axios.get(
        `https://api.github.com/users/${login}/repos?per_page=5&sort=created`
      );
      dispatch({ type: "SET_USER_PROFILE", payload: { userInfo, repos } });
      localStorage.setItem(
        "SET_USER_PROFILE",
        JSON.stringify({ userInfo, repos })
      );
    } catch (err) {
      console.log(err);
    } finally {
      dispatch({ type: "CLEAR_LOADING" });
    }
  };

  const handleClickMore = () => {
    fetchData();
  };

  return (
    <div className={styled.card}>
      <img
        className={styled.rounded}
        src={avatar_url}
        alt="user profile picture"
      />
      <h3>{login}</h3>
      <Link to={`/user/${login}`}>
        <button className={styled.moreBtn} onClick={handleClickMore}>
          More
        </button>
      </Link>
    </div>
  );
};

export default GridCard;
