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

export default function FashionDept() {
  const [fashions, setFashions] = useState("");
  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    handleFashion();
  }, []);

  async function handleFashion() {
    try {
      const fashionPromise = await api.getFashion([]);

      setFashions(fashionPromise.data);

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
        <DeptHeader>Moda</DeptHeader>
        <InfinityBorder />
        <SubContainer>
          <ItemsContainer isLoading={isLoading}>
            {fashions.length === 0 && isLoading && (
              <span>
                <ThreeDots color="#0377FF" height={25} width={150} />
              </span>
            )}
            {fashions.length !== 0 &&
              !isLoading &&
              Array.from(fashions).map((fashion, id) => (
                <Items
                  onClick={() => navigate(`/product/${fashion._id}`)}
                  key={id}
                >
                  <div className="image-wrapper">
                    <img
                      className="product-image"
                      src={fashion.image}
                      alt="ps"
                    />
                  </div>
                  <div className="info-wrapper">
                    <span className="productName">{fashion.name}</span>
                    <span className="productPrice">
                      R$ {fashion.price.toFixed(2).replace(".", ",")}
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
