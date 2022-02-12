
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

import { Container, FooterContainer, HeaderContainer, Items } from "../../Main/style";
import { DeptHeader, InfinityBorder, ItemsContainer, SubContainer } from "../style";
import Header from "../../../components/Header"
import Footer from "../../../components/Footer";
import ScrollButton from "../../../components/ScrollTopButton";
import api from "../../../services/api";

export default function CellphoneDept() {
    const [cellphones, setCellphones] = useState('');
    const [isLoading, setLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        handleCellphones();
    }, []);

    async function handleCellphones() {
        try {
            const cellPhonesPromise = await api.getCellphones([]);
            console.log(cellPhonesPromise);

            setCellphones(cellPhonesPromise.data);

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
                <DeptHeader>Celulares</DeptHeader>
                <InfinityBorder />
                <SubContainer>
                    <ItemsContainer isLoading={isLoading}>
                        {cellphones.length === 0 && isLoading && <span><ThreeDots color='#0377FF' height={25} width={150} /></span>}
                        {cellphones.length !== 0 && !isLoading &&
                            Array.from(cellphones).map((cellphone, id) =>
                                <Items onClick={() => navigate(`/product/${cellphone._id}`)} key={id}>
                                    <div className="image-wrapper">
                                        <img className="product-image" src={cellphone.image} alt="ps" />
                                    </div>
                                    <div className="info-wrapper">
                                        <span className="productName">{cellphone.name}</span>
                                        <span className="productPrice">R$ {cellphone.price.toFixed(2).replace('.', ',')}</span>
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

