import Image from 'next/image';
import React from 'react';
import PlayerList from '../../components/PlayerList';
import style from './Teams.module.css';

const Teams = () => {

    return (
        <div>
            <div className={style.ballcontrol}>
                <div>
                    <Image height="43" width='43' src="/images/icon/player-icon.png" alt="" />
                    <h2>Ball Control</h2>
                    <h4>Aces down Sets up</h4>
                    <button>Follow</button>
                </div>
                <p>In a parting shot at Parker, owner Maxim Demin said in a statement that “in order for us to keep progressing as </p>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className={style.teamImage}>
                        <Image height="431" width="681" src="/images/card-img/team-photo.png" alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    <PlayerList/>
                </div>
            </div>

        </div>
    );
};

export default Teams;