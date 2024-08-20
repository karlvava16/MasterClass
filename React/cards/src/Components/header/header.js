import React, { useState, useEffect } from 'react';
import '../../styles/App.css';

function Header({ plan }) {
    const [currentStyle, setCurrentStyle] = useState('/styles/App.css');

    const swapStyle = () => {
        setCurrentStyle((prevStyle) =>
            prevStyle === '/styles/App.css'
                ? '/styles/App2.css'
                : '/styles/App.css',
        );
    };

    useEffect(() => {
        let linkElement = document.querySelector(
            "link[data-stylesheet='dynamic']",
        );
        if (linkElement) {
            linkElement.href = currentStyle;
        } else {
            linkElement = document.createElement('link');
            linkElement.rel = 'stylesheet';
            linkElement.href = currentStyle;
            linkElement.dataset.stylesheet = 'dynamic';
            document.head.appendChild(linkElement);
        }
    }, [currentStyle]);

    return (
        <header>
            <h2>
                <i>Plan Selected: </i> <mark>{plan[0]}</mark>
            </h2>
            <h2>
                <i>Price: </i> <mark>{plan[1]}</mark>
            </h2>
            <button
                className="plan-select"
                style={{ margin: '20px' }}
                onClick={swapStyle}
            >
                Change style
            </button>
        </header>
    );
}

export default Header;
