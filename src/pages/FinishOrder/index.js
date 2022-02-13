
import { Container, FooterContainer, HeaderContainer, SubContainer } from "../Main/style";
import { InfinityBorder } from "../Departments/style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollButton from "../../components/ScrollTopButton";
import { OrderInfo, TitleHeader } from "./style";
import checkmark from "../../assets/img/checkmark.gif";

export default function FinishOrder() {


    return (
        <>
            <HeaderContainer>
                <Header />
            </HeaderContainer>
            <Container>
                <InfinityBorder />

                <TitleHeader>
                    <img src={checkmark} alt="checkmark.gif" />
                    <span>Agradecemos o seu pedido!</span>
                    <span>:)</span>
                </TitleHeader>
                <InfinityBorder />
                <SubContainer>
                    <OrderInfo>
                        <span>Informações do pedido</span>
                        <div>
                            klahsdkjashdkj
                        </div>
                    </OrderInfo>
                </SubContainer>
            </Container>
            <ScrollButton />
            <FooterContainer>
                <Footer />
            </FooterContainer>
        </>
    );
}