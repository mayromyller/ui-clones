import * as S from "./style.js";

const AccountRecommend = ({ account }) => {
  return (
    <S.Container>
      <S.Avatar src={account.avatar}></S.Avatar>
      <S.Info>
        <a>{account.title}</a>
        <span>{account.views}</span>
      </S.Info>
    </S.Container>
  );
};

export default AccountRecommend;
