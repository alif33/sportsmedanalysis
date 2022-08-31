import Image from 'next/image';
import React from 'react';
import style from './SimilarNews.module.css'

const SimilarNews = () => {
    return (
        <div className={style.similarNews}>
            <div className={style.similarNewsTitle}>
                <h3>Similiar News</h3>
                <button>View All</button>
            </div>

            <div className="row mt-3 mb-2">
                <div className="col-md-7">
                    <div className={style.newCard}>
                        <Image height="377" width="695" src="/images/card-img/card-img3.png" alt="" />
                        <h4>Abraham earns point for Roma on Dybala&apos;s difficult Juve return
                        </h4>
                        <ul>
                            <li>Floyd Miles</li>
                            <li>3 Days Ago</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-5">

                    <div className={style.similarNewsCard}>
                        <Image height="164" width="192" src="/images/card-img/card-img4.png" alt="" />
                        <div className="">
                            <h4>Uninspired Juve held by Sampdoria NFL
                            </h4>
                            <ul>
                                <li>Floyd Miles</li>
                                <li>3 Days Ago</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SimilarNews;