import * as S from "./style";

const TikTokUser = ({ user }) => {
  return (
    <S.Container>
      <S.Avatar src={user.avatar} />
      <S.Info>
        <a href="">{user.name}</a>
        <span>{user.username}</span>
      </S.Info>
    </S.Container>
  );
};

export default TikTokUser;
