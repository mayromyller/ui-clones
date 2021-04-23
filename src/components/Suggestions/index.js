import * as S from "./style";

import TikTokUser from "../TiktokUser";
import AccountRecommend from "../AccountRecommend";
import Button from "../Button";

import { accounts, searchAcctounts } from "../../helpers/accounts";

const Suggestions = () => {
  return (
    <S.Container>
      <S.SocialMediaContainer>
        <S.SocialMediaIcon src="/images/facebookIcon.svg" />
        <S.SocialMediaIcon src="/images/pinterestIcon.svg" />
        <S.SocialMediaIcon src="/images/twitterIcon.svg" />
      </S.SocialMediaContainer>

      <S.AccountsContainer>
        <S.Title>Contas Sugeridas</S.Title>
        <S.TiktokAccounts>
          {accounts.map((account, index) => (
            <S.Account>
              <TikTokUser key={index} user={account} />
              <S.ButtonContainer>
                <Button fontSize={14} outlined>
                  Seguir
                </Button>
              </S.ButtonContainer>
            </S.Account>
          ))}
        </S.TiktokAccounts>
      </S.AccountsContainer>

      <S.AccountsContainer>
        <S.Title>Descubra</S.Title>
        <S.TiktokAccounts>
          {searchAcctounts.map((search, index) => (
            <S.Account>
              <AccountRecommend key={index} account={search} />
              <S.ArrowIcon />
            </S.Account>
          ))}
        </S.TiktokAccounts>
      </S.AccountsContainer>
      <S.AppDownload src="/images/appstore.png" />
      <S.AppDownload src="/images/playstore.png" />
      <S.AppDownload src="/images/amazon.png" />
    </S.Container>
  );
};

export default Suggestions;
