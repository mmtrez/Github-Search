import loading from "../../assets/loading.gif";
import styled from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styled.loadingContainer}>
      <img src={loading} />
    </div>
  );
};

export default Loading;
