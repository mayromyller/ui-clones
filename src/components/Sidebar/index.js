import * as S from "./style";

import TikTokUser from "../TiktokUser/index";

const Sidebar = () => {
  return (
    <S.Container>
      <S.MenuItem active>
        <img src="/images/homeIcon.svg" />
        <span>Para você</span>
      </S.MenuItem>
      <S.MenuItem>
        <img src="/images/peopleIcon.svg" />
        <span>Seguindo</span>
      </S.MenuItem>
      <S.Following>
        <S.FollowingHeader>Suas pricipais contas</S.FollowingHeader>
        <TikTokUser
          user={{
            name: "Mayro Myller",
            username: "mayromyller",
            avatar: "https://avatars.githubusercontent.com/u/24323504?v=4",
          }}
        ></TikTokUser>
      </S.Following>
      <S.Info>
        <S.Links margin>
          <a>Início</a>
          <a>Sobre</a>
          <a>Sala de imprensa</a>
          <a>Carreira</a>
          <a>ByteDance</a>
        </S.Links>
        <S.Links>
          <a>Ajuda</a>
          <a>Segurança</a>
        </S.Links>
        <S.Links>
          <a>Diretrizes da comunidade</a>
          <a>Termos</a>
        </S.Links>
        <S.Links margin>
          <a>Privacidade</a>
        </S.Links>
        <S.Links margin>
          <a>© 2021 TikTok</a>
        </S.Links>
      </S.Info>
    </S.Container>
  );
};

export default Sidebar;
