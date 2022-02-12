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
            <ion-icon
                onClick={scrollToTop}
                style={{ display: visible ? 'content' : 'none' }}
                name="caret-up-outline">
            </ion-icon>
        </Button>
    );
}

export default ScrollButton;