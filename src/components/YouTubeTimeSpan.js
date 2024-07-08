import React from 'react';
import Buttons from './Buttons';

const YouTubeTimeSpan = ({ goBackClick }) => {
    return (
        <div className="page-container">
            <h1 style={{fontSize:"1.2rem" , fontWeight : "600", alignSelf:"flex-start" , margin:"0.4rem"}}>YouTube TimeSpan</h1>
            <Buttons text="Go Home" onClick={goBackClick} />
        </div>
    );
};

export default YouTubeTimeSpan;
