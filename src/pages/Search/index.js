import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ScrollButton from "../../components/ScrollTopButton";
import { DeptHeader, InfinityBorder } from "../Departments/style";
import { BackToMainButton } from "../FinishOrder/style";
import { Container, FooterContainer, HeaderContainer } from "../Main/style";
import { SubContainer } from "./style";

export default function Seach() {

    const navigate = useNavigate();

    return (
        <>
            <HeaderContainer>
                <Header />
            </HeaderContainer>
            <Container>
                <InfinityBorder />
                <DeptHeader>Resultados de pesquisa</DeptHeader>
                <InfinityBorder />
                <SubContainer>
                    <span>Erro!</span>
                    <span>Não encontramos o que você procura :(</span>
                </SubContainer>
                <BackToMainButton onClick={() => navigate("/")}>
                    Voltar à página principal
                </BackToMainButton>
            </Container>
            <ScrollButton />
            <FooterContainer>
                <Footer />
            </FooterContainer>
        </>
    );
}