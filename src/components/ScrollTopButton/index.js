import React, { useState } from "react";
import Button from "./style";

const ScrollButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;

        if (scrolled > 400) {
            setVisible(true);
        } else if (scrolled < 400) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <Button isVisible={visible}>
            <ion-icon onClick={scrollToTop} name="arrow-up-circle-outline"></ion-icon>
        </Button>
    );
}

export default ScrollButton;