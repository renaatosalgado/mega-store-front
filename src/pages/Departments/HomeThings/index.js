import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

import { Container, FooterContainer, HeaderContainer, Items } from "../../Main/style";
import { DeptHeader, InfinityBorder, ItemsContainer, SubContainer } from "../style";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ScrollButton from "../../../components/ScrollTopButton";
import api from "../../../services/api";

export default function HomeThingsDept() {
    const [homeThings, setHomeThings] = useState('');
    const [isLoading, setLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        handleHomeThings();
    }, []);

    async function handleHomeThings() {
        try {
            const homeThingsPromise = await api.getHomeThings([]);
            console.log(homeThingsPromise.data);

            setHomeThings(homeThingsPromise.data);

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
                <DeptHeader>Casa</DeptHeader>
                <InfinityBorder />
                <SubContainer>
                    <ItemsContainer isLoading={isLoading}>
                        {homeThings.length === 0 && isLoading && <span><ThreeDots color='#0377FF' height={25} width={150} /></span>}
                        {homeThings.length !== 0 && !isLoading &&
                            Array.from(homeThings).map((homeThing, id) =>
                                <Items onClick={() => navigate(`/product/${homeThing._id}`)} key={id}>
                                    <div className="image-wrapper">
                                        <img className="product-image" src={homeThing.image} alt="ps" />
                                    </div>
                                    <div className="info-wrapper">
                                        <span className="productName">{homeThing.name}</span>
                                        <span className="productPrice">R$ {homeThing.price.toFixed(2).replace('.', ',')}</span>
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