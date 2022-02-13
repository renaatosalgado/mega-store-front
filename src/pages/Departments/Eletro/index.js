import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

import {
  Container,
  FooterContainer,
  HeaderContainer,
  Items,
} from "../../Main/style";
import {
  DeptHeader,
  InfinityBorder,
  ItemsContainer,
  SubContainer,
} from "../style";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ScrollButton from "../../../components/ScrollTopButton";
import api from "../../../services/api";

export default function EletroDept() {
  const [eletros, setEletros] = useState("");
  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    handleEletro();
  }, []);

  async function handleEletro() {
    try {
      const eletroPromise = await api.getEletro([]);

      setEletros(eletroPromise.data);

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  return (
    <>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Container>
        <InfinityBorder />
        <DeptHeader>Eletrodomésticos</DeptHeader>
        <InfinityBorder />
        <SubContainer>
          <ItemsContainer isLoading={isLoading}>
            {eletros.length === 0 && isLoading && (
              <span>
                <ThreeDots color="#0377FF" height={25} width={150} />
              </span>
            )}
            {eletros.length !== 0 &&
              !isLoading &&
              Array.from(eletros).map((eletro, id) => (
                <Items
                  onClick={() => navigate(`/product/${eletro._id}`)}
                  key={id}
                >
                  <div className="image-wrapper">
                    <img
                      className="product-image"
                      src={eletro.image}
                      alt="ps"
                    />
                  </div>
                  <div className="info-wrapper">
                    <span className="productName">{eletro.name}</span>
                    <span className="productPrice">
                      R$ {eletro.price.toFixed(2).replace(".", ",")}
                    </span>
                  </div>
                </Items>
              ))}
          </ItemsContainer>
        </SubContainer>
      </Container>
      <ScrollButton />
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
  );
}
