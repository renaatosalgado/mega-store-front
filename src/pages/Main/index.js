import { Container, Department, DepHeader, FooterContainer, HeaderContainer, Items, ItemsContainer, SubContainer } from "./style";
import Header from "../../components/Header";
import ps from "../../assets/img/ps.jpg"
import Footer from "../../components/Footer";
import ScrollButton from "../../components/ScrollTopButton";

export default function MainPage() {

    const product = {
        name: 'Playstation 5',
        price: '4999,99',
        img: ps
    }

    return (
        <>
            <HeaderContainer>
                <Header />
            </HeaderContainer>
            <Container>
                <SubContainer>
                    <Department>
                        <DepHeader>Games e PC Gamer</DepHeader>
                        <ItemsContainer>
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
                    </Department>
                    <Department>
                        <DepHeader>Games e PC Gamer</DepHeader>
                        <ItemsContainer>
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
                    </Department>
                    <Department>
                        <DepHeader>Games e PC Gamer</DepHeader>
                        <ItemsContainer>
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
                    </Department>
                </SubContainer>
            </Container>
            <ScrollButton />
            <FooterContainer>
                <Footer>
                </Footer>
            </FooterContainer>
        </>
    );
}