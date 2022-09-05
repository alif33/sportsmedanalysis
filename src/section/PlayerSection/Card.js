import React from "react";
import style from "./PlayerSection.module.css";
import Link from "next/link";

const Card = ({ players }) => {
    console.log(players);
    return (
        <>
            {
                players && players.map((item, index)=>{
                    return(
                        <Link href={`/new/`}>
                            <a className='mt-2 d-block'>
                                <div className={`${style.nfl_S2_3rd_card} d-flex align-items-center p-1`}>
                                    <img height={50} width={50} src={ item.image } alt="" />
                                    <div>
                                        <h1 className={style.nfl_card_title1}>{item.firstName}</h1>
                                        <p className='mb-0'>
                                            Possible suspension has ‘no timetable’ for decision
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    )
                })
            }
        </>
    );
};

export default Card;