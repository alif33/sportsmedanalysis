import React from "react";
import style from "./PlayerSection.module.css";
import Link from "next/link";
import Image from "next/image";

const Card = ({ players }) => {
    console.log(players);
    return (
        <>
            {
                players && players.map((item, index) => {
                    return (
                        <div className={`${style.nfl_S2_3rd_card} mt-2 d-block `} key={index} >
                            <Link href={`/new/`}>
                                <a className='d-flex align-items-center p-1'>
                                    <Image height={50} width={50} src={item.image} alt="" />
                                    <div>
                                        <h1 className={style.nfl_card_title1}>{item.firstName}</h1>
                                        <p className='mb-0'>
                                            Possible suspension has ‘no timetable’ for decision
                                        </p>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    )
                })
            }
        </>
    );
};

export default Card;