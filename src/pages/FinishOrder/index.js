import { Container, FooterContainer, HeaderContainer } from "../Main/style";
import { InfinityBorder } from "../Departments/style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollButton from "../../components/ScrollTopButton";
import {
  OrderInfo,
  TitleHeader,
  SubContainer,
  InfoContainer,
  TotalContainer,
  BackToMainButton,
  ErrorMessage,
} from "./style";
import checkmark from "../../assets/img/checkmark.gif";
import { useContext } from "react";
import CartContext from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";

export default function FinishOrder() {
  const { cartFinish } = useContext(CartContext);
  console.log(cartFinish);

  const navigate = useNavigate();

  let totalCount = 25;

  window.scroll(0, 0);

  const { auth } = useAuth();

  if (cartFinish.length !== 0) {
    addOrder();
  }

  function addOrder() {
    api.postAddOrder(
      [ ...cartFinish ],
      {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      }
    );
  }

  return (
    <>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Container>
        {cartFinish.length === 0 ? (
          <ErrorMessage>
            <div>Erro 404</div>
            <div>
              Opa! Não conseguimos encontrar a página que você procura! :(
            </div>
          </ErrorMessage>
        ) : (
          <>
            <InfinityBorder />
            <TitleHeader>
              <img src={checkmark} alt="checkmark.gif" />
              <span>Agradecemos o seu pedido!</span>
              <span>:)</span>
            </TitleHeader>
            <InfinityBorder />
            <SubContainer>
              <InfoContainer>
                <span>Informações do pedido</span>
                {cartFinish?.map(
                  (item, index) => (
                    // eslint-disable-next-line no-sequences
                    (totalCount += item.price),
                    (
                      <OrderInfo key={index}>
                        <div>
                          <span>{item.name}</span>
                        </div>
                        <div>
                          <span>Quantidade: {item.quantity}</span>
                          <span>
                            Preço: R$ {item.price.toFixed(2).replace(".", ",")}
                          </span>
                        </div>
                      </OrderInfo>
                    )
                  )
                )}
                <TotalContainer>
                  <div>
                    <span>Frete único</span>
                    <span>TOTAL</span>
                  </div>
                  <div>
                    <span>R$ 25,00</span>
                    <span>R$ {totalCount.toFixed(2).replace(".", ",")}</span>
                  </div>
                </TotalContainer>
              </InfoContainer>
            </SubContainer>
          </>
        )}
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
