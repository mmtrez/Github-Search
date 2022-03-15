import styled from "./ProfileRepoCard.module.css";

const ProfileRepoCard = ({ repo }) => {
  return (
    <div className={`${styled.card} ${styled.repoContainer}`}>
      <a className={styled.repo} href={repo.html_url}>
        {repo.name}
      </a>
    </div>
  );
};

export default ProfileRepoCard;
