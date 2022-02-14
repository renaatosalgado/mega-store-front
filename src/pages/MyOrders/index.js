import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ScrollButton from "../../components/ScrollTopButton";
import { DeptHeader, InfinityBorder, SubContainer } from "../Departments/style";
import { Container, FooterContainer, HeaderContainer } from "../Main/style";

export default function MyOrders() {
  return (
    <>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Container>
        <InfinityBorder />
        <DeptHeader>Meus pedidos</DeptHeader>
        <InfinityBorder />
        <SubContainer>asdasd</SubContainer>
      </Container>
      <ScrollButton />
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
  );
}
