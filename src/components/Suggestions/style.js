import styled from "styled-components";

export const Container = styled.div`
  flex: 0 0 330px;
  width: 330px;
  margin-left: 24px;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const SocialMediaContainer = styled.div`
  margin-bottom: 39px;
  text-align: left;
`;

export const SocialMediaIcon = styled.img`
  width: 31px;
  height: 31px;
  margin-right: 15px;
`;

export const AccountsContainer = styled.div`
  position: relative;
  border: 1px solid rgba(22, 24, 35, 0.12);
  border-radius: 8px;
  height: 380px;
  display: flex;
  flex-direction: column;
  margin-bottom: 55px;
`;

export const Title = styled.div`
  padding: 24px 16px;
  padding-right: 12px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex: 0 0 auto;
  > span {
    font-weight: 700;
    line-height: 1;
    font-size: 24px;
  }
`;

export const ButtonContainer = styled.div`
  width: 95px;
  height: 28px;
  font-weight: 600;
  font-size: 16px;
  margin-left: auto;
`;

export const TiktokAccounts = styled.div`
  height: calc(100% - 72px);
  overflow: auto;
  cursor: pointer;
`;

export const Account = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const AcctounRecommend = styled.div``;

export const ArrowIcon = styled.div``;

export const AppDownload = styled.img`
  width: 170px;
  height: 50px;
  border-radius: 5px;
  margin-bottom: 12px;
`;
