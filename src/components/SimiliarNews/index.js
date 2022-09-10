import Image from 'next/image';
import React from 'react';
import style from './SimilarNews.module.css'

const SimilarNews = (props) => {
    console.log(props);
    return (
        <div>
        <div className={style.container}>
           <div>
           <Image height="110" width="180" src="/images/card-img/card-img3.png" alt="" />
           </div>
           <div>
               <p className={style.text}>How is the correct solo vlogger</p>
               <p className={style.description}><small>solo vlogger</small></p>
               <div className={style.container}>
                   <p><small className={style.subtitle}>10,0000 listened</small></p>
                   <p><small className={style.subtitle}>10 Jan 2022</small></p>
               </div>
           </div>
       </div>
       <p> <small className={style.center}>Show more</small> </p>
      </div>
    );
};

export default SimilarNews;