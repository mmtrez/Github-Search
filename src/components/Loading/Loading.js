import loading from "../../assets/loading.gif";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <img src={loading} />
    </div>
  );
};

export default Loading;
