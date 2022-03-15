import React from "react";

const ProfileRepoCard = ({ repo }) => {
  return (
    <div className="card repo-container">
      <a className="repo" href={repo.html_url}>
        {repo.name}
      </a>
    </div>
  );
};

export default ProfileRepoCard;
