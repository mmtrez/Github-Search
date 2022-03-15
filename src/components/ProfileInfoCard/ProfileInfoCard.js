import React from "react";

const ProfileInfoCard = ({
  userInfo: { avatar_url, name, location, bio, html_url, login, company, blog },
}) => {
  return (
    <div className="info-section-container card">
      <div className="img-name">
        <img className="profile-img" src={avatar_url} />
        <p>{name}</p>
        <p>{location}</p>
      </div>
      <div className="more-info">
        <>
          <h2>Bio :</h2>
          <p className="p-bio">{bio ?? "This user didn't provide any bio!"}</p>
        </>
        <a href={html_url}>
          <button className="btn btn-dark my-1">Visit Github Page</button>
        </a>
        <div>
          <p>Login : {login}</p>
          {company !== null && <p>Company : {company}</p>}
          {blog !== null && <p>Blog : {blog}</p>}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoCard;
