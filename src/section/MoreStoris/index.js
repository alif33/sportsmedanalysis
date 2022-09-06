import React from 'react';
import MoreStorisCard from '../../components/sectionCard/MoreStorisCard';
import style from '../MoreStorisMobile/MoreStoris.module.css'

const MoreStoris = ({ title }) => {
    return (
        <div className="d-md-block d-none">
            <>
                <div className="row w-100 mb-3 mt-3 ">
                    <div className={`col-md-12 ${style.title}`}>
                        <h3>{title}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">  <MoreStorisCard /></div>
                    <div className="col-md-3">  <MoreStorisCard /></div>
                    <div className="col-md-3">  <MoreStorisCard /></div>
                    <div className="col-md-3">  <MoreStorisCard /></div>

                    <div className="col-md-3">  <MoreStorisCard /></div>
                    <div className="col-md-3">  <MoreStorisCard /></div>
                    <div className="col-md-3">  <MoreStorisCard /></div>
                    <div className="col-md-3">  <MoreStorisCard /></div>
                </div>
            </>
        </div>
    );
};

export default MoreStoris;