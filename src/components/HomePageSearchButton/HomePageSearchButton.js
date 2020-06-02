import React from 'react';

import './HomePageSearchButton.scss'

const HomePageSearchButton = (props) => {
    return (<button className="home-page-btn" onClick={props.handleClick}>Search icon</button>);
};

export default HomePageSearchButton;
