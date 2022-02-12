
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

import { Container, FooterContainer, HeaderContainer, Items } from "../../Main/style";
import { DeptHeader, InfinityBorder, ItemsContainer, SubContainer } from "../style";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ScrollButton from "../../../components/ScrollTopButton";
import api from "../../../services/api";

export default function BooksDept() {
    const [books, setBooks] = useState('');
    const [isLoading, setLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        handleBooks();
    }, []);

    async function handleBooks() {
        try {
            const booksPromise = await api.getBooks([]);

            setBooks(booksPromise.data);

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
                <DeptHeader>Livros</DeptHeader>
                <InfinityBorder />
                <SubContainer>
                    <ItemsContainer isLoading={isLoading}>
                        {books.length === 0 && isLoading && <span><ThreeDots color='#0377FF' height={25} width={150} /></span>}
                        {books.length !== 0 && !isLoading &&
                            Array.from(books).map((book, id) =>
                                <Items onClick={() => navigate(`/product/${book._id}`)} key={id}>
                                    <div className="image-wrapper">
                                        <img className="product-image" src={book.image} alt="ps" />
                                    </div>
                                    <div className="info-wrapper">
                                        <span className="productName">{book.name}</span>
                                        <span className="productPrice">R$ {book.price.toFixed(2).replace('.', ',')}</span>
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

