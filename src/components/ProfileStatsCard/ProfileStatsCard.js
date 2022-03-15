const ProfileStatsCard = ({
  userInfo: { followers, following, public_gists, public_repos },
}) => {
  return (
    <div className="card">
      <div className="tag tag-red">
        <p>Followers: {followers}</p>
      </div>
      <div className="tag tag-light">
        <p>Following: {following}</p>
      </div>
      <div className="tag tag-green">
        <p>Public Repos: {public_repos}</p>
      </div>
      <div className="tag tag-dark">
        <p>Public Gists: {public_gists}</p>
      </div>
    </div>
  );
};

export default ProfileStatsCard;
