import React from "react";

const ProfileInfoCard = ({
  userInfo: { avatar_url, name, location, bio, html_url, login },
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
          <p>{bio ?? "This user didn't provide any bio!"}</p>
        </>
        <a href={html_url}>
          <button className="btn btn-dark my-1">Visit Github Page</button>
        </a>
        <div className="flex">
          <p>Login : </p>
          <p>{login}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoCard;
