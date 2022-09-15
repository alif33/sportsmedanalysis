import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { logedIn } from '../../../store/user/actions';
import { updateData } from '../../../__lib__/helpers/HttpService';
import style from './Player.module.css'

const Player = ({ player }) => {
    const { firstName, lastName } = player;
    const router = useRouter();
    const dispatch = useDispatch();
    const { user } = useSelector(state=>state);
    const { isUser, __u__ } = user;
    const { info } = __u__;

    const followHandler= () =>{
        if (isUser) {
            updateData(`/user/player/follow?__p=${ player._id }`,{ firstName, lastName }, __u__.token)
            .then(res=>{
                if(res.success){
                    toast.success("Followed");
                    const { token, info } = res;
                    dispatch(
                        logedIn({
                            token,
                            info,
                        })
                    );
                }
            })
        }else{
            router.push("/auth/sign-in")
        }

    }

    // console.log(info._players.includes(player._id));
    const UnfollowHandler= () =>{
        updateData(`/user/player/unfollow?__p=${ player._id }`,{ }, __u__.token)
        .then(res=>{
            if(res.success){
                toast.success("Unfollowed");
                const { token, info } = res;
                dispatch(
                    logedIn({
                        token,
                        info,
                    })
                );
            }
        })  
    }

    return (
        <div className={style.player} >
            <div className={style.playerImage}>
                <Image height="600" width="600" src={ player.image } alt="" />
            </div>
            <div className={style.playerContent}>
                <h2>{ player.firstName } { player.lastName }</h2>
                <h6> <Image height="32" width="32" src="/images/icon/player-icon.png" alt="" />
                    { player.league }
                </h6>
                <p>{ player.description }</p>
                {
                    isUser && info?._players.includes(player._id) ?<button
                        onClick={ UnfollowHandler }
                    >Unfollow</button>:<button
                        onClick={ followHandler }
                    >Follow</button>
                }
            </div>
        </div>
    );
};

export default Player;