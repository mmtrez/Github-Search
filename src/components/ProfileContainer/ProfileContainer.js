import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import ProfileRepoCard from "../ProfileRepoCard/ProfileRepoCard";
import ProfileStatsCard from "../ProfileStatsCard/ProfileStatsCard";
import ProfileInfoCard from "../ProfileInfoCard/ProfileInfoCard";
import { ReactComponent as Check } from "../../assets/svg/check.svg";
import { ReactComponent as Close } from "../../assets/svg/close.svg";
import styled from "./ProfileContainer.module.css";

const ProfileContainer = () => {
  const { userInfo, repos } = useSelector((state) => state.userProfile);
  const loading = useSelector((state) => state.loading);

  console.log({ userInfo, repos });
  return (
    <>
      {!loading && (
        <>
          <div className={`${styled.flex} ${styled.alignCenter}`}>
            <Link to="/">
              <button className={`${styled.btnLight}`}>Back To Search</button>
            </Link>
            {userInfo.hireable !== null && (
              <div className={`${styled.flex} ${styled.alignCenter}`}>
                <p> hireable : </p>
                {userInfo.hireable ? (
                  <Check className={`${styled.hireableIcon}`} />
                ) : (
                  <Close className={`${styled.notHirableIcon}`} />
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
