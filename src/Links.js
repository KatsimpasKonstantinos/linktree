import './App.css';
import React from 'react';
import './Link.css';

function Link(props) {
    const { link, name, logo, theme} = props;
    return (
        <a href={link} className={`Link ${theme}Child`}>
            <p className="Text">{"‎ ‎" + name}</p>
            <img src={logo} alt={""} className="Logo" />
        </a>
    );
}

export default Link;
