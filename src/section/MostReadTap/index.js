import React from 'react';
import { useState } from 'react';
import TapNewsCard from '../../components/sectionCard/TapNewsCard';
import TapWatchNewsCard from '../../components/sectionCard/TapWatchNewsCard';
import style from './MostReadTap.module.css';

const MostReadTap = () => {
    const [tap, setTap] = useState(1)
    return (
        <div className={style.mostReadTap}>
            <div className={style.mostReadTapBtn}>
                <button onClick={() => setTap(1)} className={tap === 1 && style.active}>Most Read</button>
                <button onClick={() => setTap(2)} className={tap === 2 && style.active}>Most Watched</button>
            </div>
          { tap ===1 && <>
            <TapNewsCard />
            <TapNewsCard />
            <TapNewsCard /></>}
          {  tap ===2 && <>
            <TapWatchNewsCard />
            <TapWatchNewsCard />
            <TapWatchNewsCard />
          </>}
        </div>
    );
};

export default MostReadTap;