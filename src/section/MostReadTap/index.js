import React from 'react';
import { useState } from 'react';
import TapNewsCard from '../../components/sectionCard/TapNewsCard';
import style from './MostReadTap.module.css';

const MostReadTap = () => {
    const [tap, setTap] = useState(1)
    return (
        <div className={style.mostReadTap}>
            <div className={style.mostReadTapBtn}>
                <button onClick={() => setTap(1)} className={tap === 1 && style.active}>Most Read</button>
                <button onClick={() => setTap(2)} className={tap === 2 && style.active}>Most Watched</button>
            </div>
            <TapNewsCard />
            <TapNewsCard />
            <TapNewsCard />
        </div>
    );
};

export default MostReadTap;