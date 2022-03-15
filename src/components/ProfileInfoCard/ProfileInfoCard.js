import styled from "./ProfileInfoCard.module.css";

const ProfileInfoCard = ({
  userInfo: { avatar_url, name, location, bio, html_url, login, company, blog },
}) => {
  return (
    <div className={`${styled.infoSectionContainer} ${styled.card}`}>
      <div className={styled.imgName}>
        <img className={styled.profileImg} src={avatar_url} />
        <p>{name}</p>
        <p>{location}</p>
      </div>
      <div className={styled.moreInfo}>
        <>
          <h2>Bio :</h2>
          <p className={styled.pBio}>
            {bio ?? "This user didn't provide any bio!"}
          </p>
        </>
        <a href={html_url}>
          <button className={`${styled.btnDark} ${styled.my1}`}>
            Visit Github Page
          </button>
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
