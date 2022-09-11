import Image from 'next/image';
import React from 'react';
import style from './TopNews.module.css'

const SimilarNews = () => {
    return (
        <div>
        <div className={style.container}>
           <div className={style.leftBlock}>
           <Image height="154" width="213" src="/images/card-img/card-img3.png" alt="" />
           </div>
           <div className={style.rightBlock}>
               <p className={style.text}>How Is The Correct Solo Vlogger</p>
               <p className={style.description}><small>For beginner who are just starting</small></p>
               <div className={style.viewCountcontainer}>
                   <p><small className={style.viewCount}>10,0000 listened</small></p>
                   <p><small className={style.viewCount}>10 Jan 2022</small></p>
               </div>
           </div>
       </div>
       <p className={style.center}> <small >Show more</small> </p>
      </div>
    );
};

export default SimilarNews;