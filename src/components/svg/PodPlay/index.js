import React from 'react';

const PodPlay = ({ handlePlay }) => {
    return (
        <svg onClick={ handlePlay } stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M96 52v408l320-204L96 52z" />
        </svg>       
    );
};

export default PodPlay;

