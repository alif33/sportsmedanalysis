import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import MoreStorisCard from '../../components/sectionCard/MoreStorisCard';
import style from '../MoreStorisMobile/MoreStoris.module.css'

const MoreStoris = ({ title }) => {
    return (
        <div className="">
            <>
                <div className="row w-100 mb-md-3 mt-md-3 mb-2  ">
                    <div className={`col-md-12 ${style.title}`}>
                        <div className="d-flex justify-content-between align-items-center">
                            <h4 className="d-inline-block pe-2">{title}</h4>
                            <Link href="/"><a className="show-more"><h3>Show More</h3><i className="d-flex"><Image height="8" width="12" src="/images/icon/arrow-right2.png" alt="" /></i></a></Link>
                        </div>
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