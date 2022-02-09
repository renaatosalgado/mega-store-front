import React, { useState } from "react";
import Button from "./style";

import { CaretUpOutline } from 'react-ionicons'

const ScrollButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;

        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled < 300) {
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
        <Button>
            <CaretUpOutline
                onClick={scrollToTop}
                style={{ display: visible ? 'inline' : 'none' }}
                color={'#0333ff'}
                height="50px"
                width="50px"
            />
        </Button>
    );
}

export default ScrollButton;