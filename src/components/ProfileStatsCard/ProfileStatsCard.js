import styled from "./ProfileStatsCard.module.css";

const ProfileStatsCard = ({
  userInfo: { followers, following, public_gists, public_repos },
}) => {
  return (
    <div className={styled.card}>
      <div className={`${styled.tag} ${styled.tagRed}`}>
        <p className={styled.tagP}>Followers: {followers}</p>
      </div>
      <div className={`${styled.tag} ${styled.tagLight}`}>
        <p className={styled.tagP}>Following: {following}</p>
      </div>
      <div className={`${styled.tag} ${styled.tagGreen}`}>
        <p className={styled.tagP}>Public Repos: {public_repos}</p>
      </div>
      <div className={`${styled.tag} ${styled.tagDark}`}>
        <p className={styled.tagP}>Public Gists: {public_gists}</p>
      </div>
    </div>
  );
};

export default ProfileStatsCard;
