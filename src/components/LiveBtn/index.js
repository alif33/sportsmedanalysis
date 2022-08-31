import React from 'react';
import style from './LiveBtn.module.css';

const LiveBtn = ({ name }) => {
    return (
        <button className={style.button}>
            {name}
        </button>
    );
};

export default LiveBtn;