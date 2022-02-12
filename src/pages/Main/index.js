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
import Footer from "../../components/Footer";
import ScrollButton from "../../components/ScrollTopButton";

import { useEffect, useRef, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

export default function MainPage() {
  const [books, setBooks] = useState("");
  const [cellphones, setCellphones] = useState("");
  const [games, setGames] = useState("");
  const [homeThings, setHomeThings] = useState("");

  const [isLoading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  // const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    handleProducts();
  }, []);

  async function handleProducts() {
    setLoading(true);
    try {
      const booksPromise = await api.getBooks([]);
      const cellphonesPromise = await api.getCellphones([]);
      const gamesPromise = await api.getGames([]);
      const homeThingsPromise = await api.getHomeThings([]);

      setBooks(booksPromise.data);
      setCellphones(cellphonesPromise.data);
      setGames(gamesPromise.data);
      setHomeThings(homeThingsPromise.data);

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

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
          <Department>
            <DepHeader>Celulares</DepHeader>
            <ItemsContainer
              isLoading={isLoading}
              className="sliderContainer"
              ref={ref1}
            >
              <HorizontalScrollButton
                right={false}
                onClick={() => scroll(-200, ref1)}
              >
                <ion-icon name="chevron-back-outline"></ion-icon>
              </HorizontalScrollButton>
              {cellphones.length === 0 && isLoading && (
                <span>
                  <ThreeDots color="#0377FF" height={25} width={150} />
                </span>
              )}
              {cellphones.length !== 0 &&
                !isLoading &&
                Array.from(cellphones).map((cellphone, id) => (
                  <Items
                    onClick={() => navigate(`/product/${cellphone._id}`)}
                    key={id}
                  >
                    <div className="image-wrapper">
                      <img
                        className="product-image"
                        src={cellphone.image}
                        alt="ps"
                      />
                    </div>
                    <div className="info-wrapper">
                      <span className="productName">{cellphone.name}</span>
                      <span className="productPrice">
                        R$ {cellphone.price.toFixed(2).replace(".", ",")}
                      </span>
                    </div>
                  </Items>
                ))}
            </ItemsContainer>
            <HorizontalScrollButton
              right={true}
              onClick={() => scroll(200, ref1)}
            >
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </HorizontalScrollButton>
          </Department>
          <Department>
            <DepHeader>Livros</DepHeader>
            <ItemsContainer
              isLoading={isLoading}
              className="sliderContainer"
              ref={ref2}
            >
              <HorizontalScrollButton
                right={false}
                onClick={() => scroll(-200, ref2)}
              >
                <ion-icon name="chevron-back-outline"></ion-icon>
              </HorizontalScrollButton>
              {books.length === 0 && isLoading && (
                <span>
                  <ThreeDots color="#0377FF" height={25} width={150} />
                </span>
              )}
              {books.length !== 0 &&
                !isLoading &&
                Array.from(books).map((book, id) => (
                  <Items
                    onClick={() => navigate(`/product/${book._id}`)}
                    key={id}
                  >
                    <div className="image-wrapper">
                      <img
                        className="product-image"
                        src={book.image}
                        alt="ps"
                      />
                    </div>
                    <div className="info-wrapper">
                      <span className="productName">{book.name}</span>
                      <span className="productPrice">
                        R$ {book.price.toFixed(2).replace(".", ",")}
                      </span>
                    </div>
                  </Items>
                ))}
            </ItemsContainer>
            <HorizontalScrollButton
              right={true}
              onClick={() => scroll(200, ref2)}
            >
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </HorizontalScrollButton>
          </Department>
          <Department>
            <DepHeader>Games e PC Gamer</DepHeader>
            <ItemsContainer
              isLoading={isLoading}
              className="sliderContainer"
              ref={ref3}
            >
              <HorizontalScrollButton
                right={false}
                onClick={() => scroll(-200, ref3)}
              >
                <ion-icon name="chevron-back-outline"></ion-icon>
              </HorizontalScrollButton>
              {games.length === 0 && isLoading && (
                <span>
                  <ThreeDots color="#0377FF" height={25} width={150} />
                </span>
              )}
              {games.length !== 0 &&
                !isLoading &&
                Array.from(games).map((game, id) => (
                  <Items
                    onClick={() => navigate(`/product/${game._id}`)}
                    key={id}
                  >
                    <div className="image-wrapper">
                      <img
                        className="product-image"
                        src={game.image}
                        alt="ps"
                      />
                    </div>
                    <div className="info-wrapper">
                      <span className="productName">{game.name}</span>
                      <span className="productPrice">
                        R$ {game.price.toFixed(2).replace(".", ",")}
                      </span>
                    </div>
                  </Items>
                ))}
            </ItemsContainer>
            <HorizontalScrollButton
              right={true}
              onClick={() => scroll(200, ref3)}
            >
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </HorizontalScrollButton>
          </Department>
          <Department>
            <DepHeader>Casa</DepHeader>
            <ItemsContainer
              isLoading={isLoading}
              className="sliderContainer"
              ref={ref4}
            >
              <HorizontalScrollButton
                right={false}
                onClick={() => scroll(-200, ref4)}
              >
                <ion-icon name="chevron-back-outline"></ion-icon>
              </HorizontalScrollButton>
              {homeThings.length === 0 && isLoading && (
                <span>
                  <ThreeDots color="#0377FF" height={25} width={150} />
                </span>
              )}
              {homeThings.length !== 0 &&
                !isLoading &&
                Array.from(homeThings).map((homeThing, id) => (
                  <Items
                    onClick={() => navigate(`/product/${homeThing._id}`)}
                    key={id}
                  >
                    <div className="image-wrapper">
                      <img
                        className="product-image"
                        src={homeThing.image}
                        alt="ps"
                      />
                    </div>
                    <div className="info-wrapper">
                      <span className="productName">{homeThing.name}</span>
                      <span className="productPrice">
                        R$ {homeThing.price.toFixed(2).replace(".", ",")}
                      </span>
                    </div>
                  </Items>
                ))}
            </ItemsContainer>
            <HorizontalScrollButton
              right={true}
              onClick={() => scroll(200, ref4)}
            >
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </HorizontalScrollButton>
          </Department>
        </SubContainer>
      </Container>
      <ScrollButton />
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
  );
}
