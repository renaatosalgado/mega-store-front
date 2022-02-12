import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

import { Container, FooterContainer, HeaderContainer, Items } from "../../Main/style";
import { DeptHeader, InfinityBorder, ItemsContainer, SubContainer } from "../style";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ScrollButton from "../../../components/ScrollTopButton";
import api from "../../../services/api";

export default function GamesDept() {
    const [games, setGames] = useState('');
    const [isLoading, setLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        handleGames();
    }, []);

    async function handleGames() {
        try {
            const gamesPromise = await api.getGames([]);
            console.log(gamesPromise.data);

            setGames(gamesPromise.data);

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
                <DeptHeader>Games e PC Gamer</DeptHeader>
                <InfinityBorder />
                <SubContainer>
                    <ItemsContainer isLoading={isLoading}>
                        {games.length === 0 && isLoading && <span><ThreeDots color='#0377FF' height={25} width={150} /></span>}
                        {games.length !== 0 && !isLoading &&
                            Array.from(games).map((game, id) =>
                                <Items onClick={() => navigate(`/product/${game._id}`)} key={id}>
                                    <div className="image-wrapper">
                                        <img className="product-image" src={game.image} alt="ps" />
                                    </div>
                                    <div className="info-wrapper">
                                        <span className="productName">{game.name}</span>
                                        <span className="productPrice">R$ {game.price.toFixed(2).replace('.', ',')}</span>
                                    </div>
                                </Items>
                            )
                        }
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