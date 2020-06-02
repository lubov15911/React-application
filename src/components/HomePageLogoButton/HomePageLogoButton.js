import React from 'react';

import './HomePageLogoButton.scss'

const HomePageLogoButton = (props) => {
    return (<button className="home-page-btn" onClick={props.handleClick}><b>netflix</b>roulette</button>);
};

export default HomePageLogoButton;
