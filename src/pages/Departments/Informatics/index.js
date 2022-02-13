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

export default function InformaticsDept() {
  const [informatics, setInformatics] = useState("");
  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    handleInformatics();
  }, []);

  async function handleInformatics() {
    try {
      const informaticsPromise = await api.getInformatics([]);

      setInformatics(informaticsPromise.data);

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
        <DeptHeader>Informática</DeptHeader>
        <InfinityBorder />
        <SubContainer>
          <ItemsContainer isLoading={isLoading}>
            {informatics.length === 0 && isLoading && (
              <span>
                <ThreeDots color="#0377FF" height={25} width={150} />
              </span>
            )}
            {informatics.length !== 0 &&
              !isLoading &&
              Array.from(informatics).map((informatic, id) => (
                <Items
                  onClick={() => navigate(`/product/${informatic._id}`)}
                  key={id}
                >
                  <div className="image-wrapper">
                    <img
                      className="product-image"
                      src={informatic.image}
                      alt="ps"
                    />
                  </div>
                  <div className="info-wrapper">
                    <span className="productName">{informatic.name}</span>
                    <span className="productPrice">
                      R$ {informatic.price.toFixed(2).replace(".", ",")}
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
