import React from 'react';
import style from './Nflteam.module.css';
import NflTeamItem from './NflTeamItem';

const NflTeam = () => {
    return (
        <div className={style.nfl_S7}>
            <div className="nfl_con">
                <h1 className={style.nfl_card_title2}>NFL Team</h1>

                <div className={`${style.nfl_S7_container} my-3`}>
                    <div className="row g-3">

                        <div className="col-6 col-md-3 ">
                            <div>
                                <h4 className={style.nfl_S7_title}>AFC East</h4>
                                <ul className={`list-unstyled ${style.nfl_S7_ul}`}>
                                    <NflTeamItem />
                                </ul>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 ">
                            <div>
                                <h4 className={style.nfl_S7_title}>AFC East</h4>
                                <ul className={`list-unstyled ${style.nfl_S7_ul}`}>
                                    <NflTeamItem />
                                </ul>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 ">
                            <div>
                                <h4 className={style.nfl_S7_title}>AFC East</h4>
                                <ul className={`list-unstyled ${style.nfl_S7_ul}`}>
                                    <NflTeamItem />
                                </ul>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 ">
                            <div>
                                <h4 className={style.nfl_S7_title}>AFC East</h4>
                                <ul className={`list-unstyled ${style.nfl_S7_ul}`}>
                                    <NflTeamItem />
                                </ul>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 ">
                            <div>
                                <h4 className={style.nfl_S7_title}>AFC East</h4>
                                <ul className={`list-unstyled ${style.nfl_S7_ul}`}>
                                    <NflTeamItem />
                                </ul>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 ">
                            <div>
                                <h4 className={style.nfl_S7_title}>AFC East</h4>
                                <ul className={`list-unstyled ${style.nfl_S7_ul}`}>
                                    <NflTeamItem />
                                </ul>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 ">
                            <div>
                                <h4 className={style.nfl_S7_title}>AFC East</h4>
                                <ul className={`list-unstyled ${style.nfl_S7_ul}`}>
                                    <NflTeamItem />
                                </ul>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 ">
                            <div>
                                <h4 className={style.nfl_S7_title}>AFC East</h4>
                                <ul className={`list-unstyled ${style.nfl_S7_ul}`}>
                                    <NflTeamItem />
                                </ul>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default NflTeam;