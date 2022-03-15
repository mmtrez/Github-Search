import { useSelector } from "react-redux";
import GridCard from "../GridCard/GridCard";
import Loading from "../Loading/Loading";
import styled from "./Grid.module.css";

const Grid = () => {
  const users = useSelector((state) => state.searchResult);
  const loading = useSelector((state) => state.loading);
  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <div className={styled.grid}>
          {users.map((user, index) => (
            <GridCard key={index} user={user} />
          ))}
        </div>
      )}
    </>
  );
};

export default Grid;
