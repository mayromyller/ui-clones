import Header from "../Header";
import Sidebar from "../Sidebar";

import { Container, SidebarContainer, Content } from "./style";

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <Container>
        <SidebarContainer>
          <Sidebar></Sidebar>
        </SidebarContainer>
        <Content>{children}</Content>
      </Container>
    </>
  );
};

export default Layout;
