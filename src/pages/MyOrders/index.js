import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ScrollButton from "../../components/ScrollTopButton";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
import { ThreeDots } from "react-loader-spinner";
import { DeptHeader, InfinityBorder, SubContainer } from "../Departments/style";
import { Container, FooterContainer, HeaderContainer } from "../Main/style";
import { InfoContainer, OrderInfo, TotalContainer } from "./style";

export default function MyOrders() {
  const { auth } = useAuth();
  const [userOrders, setUserOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let totalCount = 25;

  useEffect(() => {
    setIsLoading(true)
    api
      .getUserOrders({ headers: { Authorization: `Bearer ${auth.token}` } })
      .then((res) => {
        setIsLoading(false)
        setUserOrders(res.data.orders);
      })
      .catch((err) => console.log(err));
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Container>
        <InfinityBorder />
        <DeptHeader>Meus pedidos</DeptHeader>
        <InfinityBorder />
        <SubContainer>
          {isLoading ? (
            <span>
              <ThreeDots color="#0377FF" height={25} width={150} />
            </span>
          ) : (
            <>
              {userOrders?.map((order, index) => (
                <InfoContainer key={index}>
                  <span>Informações do pedido</span>
                  {order?.map(
                    (item, index) => (
                      // eslint-disable-next-line no-sequences
                      (totalCount += (item.price*item.quantity)),
                      (
                        <OrderInfo key={index}>
                          <div>
                            <span>{item.name}</span>
                          </div>
                          <div>
                            <span>Quantidade: {item.quantity}</span>
                            <span>
                              Preço: R${" "}
                              {item.price?.toFixed(2).replace(".", ",")}
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
              ))}
            </>
          )}
        </SubContainer>
      </Container>
      <ScrollButton />
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
  );
}
