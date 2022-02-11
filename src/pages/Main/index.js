import {
  Container,
  Department,
  DepHeader,
  FooterContainer,
  HeaderContainer,
  HorizontalScrollButton,
  Items,
  ItemsContainer,
  SubContainer,
} from "./style";
import Header from "../../components/Header";
import ps from "../../assets/img/ps.jpg";
import Footer from "../../components/Footer";
import ScrollButton from "../../components/ScrollTopButton";
import { useRef } from "react";

export default function MainPage() {
  const product = {
    name: "Playstation 5",
    price: "999,99",
    img: ps,
  };

  const ref1 = useRef(null);
  // const ref2 = useRef(null);
  // const ref3 = useRef(null);
  // const ref4 = useRef(null);

  const scroll = (scrollOffset, ref) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Container>
        <SubContainer>
          <Department>Recomedações</Department>
          <Department>
            <DepHeader>Games e PC Gamer</DepHeader>
            <ItemsContainer className="sliderContainer" ref={ref1}>
              <HorizontalScrollButton
                right={false}
                onClick={() => scroll(-100, ref1)}
              >
                <ion-icon name="chevron-back-outline"></ion-icon>
              </HorizontalScrollButton>
              <Items>
                <div className="image-wrapper">
                  <img className="product-image" src={product.img} alt="ps" />
                </div>
                <div className="info-wrapper">
                  <span className="productName">{product.name}</span>
                  <span className="productPrice">R$ {product.price}</span>
                </div>
              </Items>
              <Items>
                <div>
                  <div className="image-wrapper">
                    <img className="product-image" src={product.img} alt="ps" />
                  </div>
                  <div className="info-wrapper">
                    <span className="productName">{product.name}</span>
                    <span className="productPrice">R$ {product.price}</span>
                  </div>
                </div>
              </Items>
              <Items>
                <div className="image-wrapper">
                  <img className="product-image" src={product.img} alt="ps" />
                </div>
                <div className="info-wrapper">
                  <span className="productName">{product.name}</span>
                  <span className="productPrice">R$ {product.price}</span>
                </div>
              </Items>
              <Items>
                <div className="image-wrapper">
                  <img className="product-image" src={product.img} alt="ps" />
                </div>
                <div className="info-wrapper">
                  <span className="productName">{product.name}</span>
                  <span className="productPrice">R$ {product.price}</span>
                </div>
              </Items>
              <Items>
                <div className="image-wrapper">
                  <img className="product-image" src={product.img} alt="ps" />
                </div>
                <div className="info-wrapper">
                  <span className="productName">{product.name}</span>
                  <span className="productPrice">R$ {product.price}</span>
                </div>
              </Items>
              <Items>
                <div className="image-wrapper">
                  <img className="product-image" src={product.img} alt="ps" />
                </div>
                <div className="info-wrapper">
                  <span className="productName">{product.name}</span>
                  <span className="productPrice">R$ {product.price}</span>
                </div>
              </Items>
              <Items>
                <div className="image-wrapper">
                  <img className="product-image" src={product.img} alt="ps" />
                </div>
                <div className="info-wrapper">
                  <span className="productName">{product.name}</span>
                  <span className="productPrice">R$ {product.price}</span>
                </div>
              </Items>
              <Items>
                <div className="image-wrapper">
                  <img className="product-image" src={product.img} alt="ps" />
                </div>
                <div className="info-wrapper">
                  <span className="productName">{product.name}</span>
                  <span className="productPrice">R$ {product.price}</span>
                </div>
              </Items>
              <Items>
                <div className="image-wrapper">
                  <img className="product-image" src={product.img} alt="ps" />
                </div>
                <div className="info-wrapper">
                  <span className="productName">{product.name}</span>
                  <span className="productPrice">R$ {product.price}</span>
                </div>
              </Items>
            </ItemsContainer>
            <HorizontalScrollButton
              right={true}
              onClick={() => scroll(100, ref1)}
            >
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </HorizontalScrollButton>
          </Department>
        </SubContainer>
      </Container>
      <ScrollButton />
      <FooterContainer>
        <Footer></Footer>
      </FooterContainer>
    </>
  );
}
