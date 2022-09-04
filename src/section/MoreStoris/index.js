import React from 'react';
import MoreStorisCard from '../../components/sectionCard/MoreStorisCard';
import style from './MoreStoris.module.css'

const MoreStoris = ({ title}) => {
    return (
        <>
            <div className="row w-100">
                <div className={`col-md-12 ${style.title}`}>
                    <h3>{title}</h3>
                </div>
            </div>
            <div className={style.moreStoris}>
                <MoreStorisCard />
                <MoreStorisCard />
                <MoreStorisCard />
                <MoreStorisCard />
                <MoreStorisCard />
                <MoreStorisCard />
                <MoreStorisCard />
                <MoreStorisCard />
                <MoreStorisCard />
                <MoreStorisCard />
            </div>
        </>
    );
};

export default MoreStoris;