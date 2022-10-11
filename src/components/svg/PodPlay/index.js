import React from 'react';

const PodPlay = ({ handlePlay }) => {
    return (
        <svg onClick={ handlePlay } width="67" height="68" viewBox="0 0 67 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M96 52v408l320-204L96 52z" fill="#D70404"/>
        </svg>       
    );
};

export default PodPlay;

