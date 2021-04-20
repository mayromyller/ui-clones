import * as S from "./style";

const Hedare = () => {
  return (
    <S.Container>
      <S.Content>
        <S.LogoContainer>
          <S.LogoIcon src="/images/logoIcon.svg" />
          <S.Logo src="/images/logo.svg" />
        </S.LogoContainer>
        <S.Options>
          <S.Icon src="/images/uploadIcon.svg" />
          <S.Avatar>
            <img
              src="https://avatars.githubusercontent.com/u/24323504?v=4"
              alt=""
            />
          </S.Avatar>
        </S.Options>
      </S.Content>
    </S.Container>
  );
};

export default Hedare;
