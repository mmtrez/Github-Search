import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import ProfileRepoCard from "../ProfileReposCard/ProfileRepoCard";
import ProfileStatsCard from "../ProfileStatsCard/ProfileStatsCard";
import ProfileInfoCard from "../ProfileInfoCard/ProfileInfoCard";
import { ReactComponent as Check } from "../../assets/svg/check.svg";
import { ReactComponent as Close } from "../../assets/svg/close.svg";
import "./ProfileContainer.css";

const ProfileContainer = () => {
  const { userInfo, repos } = useSelector((state) => state.userProfile);
  const loading = useSelector((state) => state.loading);

  console.log({ userInfo, repos });
  return (
    <>
      {!loading && (
        <>
          <div className="flex align-center">
            <Link to="/">
              <button className="btn btn-light">Back To Search</button>
            </Link>
            {userInfo.hireable !== null && (
              <div className="flex align-center">
                <p> hireable : </p>
                {userInfo.hireable ? (
                  <Check className="hireable-icon" />
                ) : (
                  <Close className="not-hirable-icon" />
                )}
              </div>
            )}
          </div>
          <ProfileInfoCard userInfo={userInfo} />
          <ProfileStatsCard userInfo={userInfo} />
          {repos.map((repo, index) => (
            <ProfileRepoCard repo={repo} key={index} />
          ))}
        </>
      )}
      {loading && <Loading />}
    </>
  );
};

export default ProfileContainer;
