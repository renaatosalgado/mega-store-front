import { useNavigate } from "react-router-dom";
import Logo from "../../assets/img/mega-store-logo-blank.png";
import { Container, LogoContainer } from "./style";

export default function Footer() {

    const navigate = useNavigate();

    return (
        <Container>
            <LogoContainer>
                <img src={Logo} alt="mega-store-logo-png" onClick={() => navigate("/")} />
            </LogoContainer>
        </Container>
    );
}
