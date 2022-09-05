import React from "react";
import Link from "next/link";
import Card from "./Card";
import Live from "./Live";
import LiveCard from "./LiveCard";
import style from './Watches.module.css';

const Section = ({ title, live, lists }) => {

    return (
        <div className="container-fluid mt-2">
            <h4 className={`${style.nfl_card_title2} ${style._smd_watch_live_title}`}>{title} {live && <Live />}</h4>
            <div className="row">
                {
                    lists && lists.map((item, index) => {
                        return (
                            <div key={index} className="col-md-3">
                                {
                                    live ? <LiveCard
                                        item={item}
                                    /> : <Card
                                        key={ index }
                                        item={item}
                                    />
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Section;