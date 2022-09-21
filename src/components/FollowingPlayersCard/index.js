import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import style from './Following.module.css';
import { getData } from '../../../__lib__/helpers/HttpService';

const FollowingPlayersCard = () => {
    const [ players, setPlayers ] = useState([]);
    const [ results, setResults ] = useState();

    useEffect(()=>{
        getData("/players")
        .then(res=>{
            setPlayers(res);
        })
    }, [])

    const handleChange = query =>{
        // players.filter(el=>el.firstName === query || el.lastName === query);
        setResults(players.filter(
            el=>el.slug.toLowerCase().includes(query)
        ));

        console.log(results);
        // homes.filter(       function (el) {
        //     return el.firstName <= 1000 || el.sqft >= 500 
        //   });
    } 
    return (
        <div className={`${style.card2} mt-2`}>
            <h6>Following Players</h6>
            <div className={`${style.follow_player_search_input} mt-1`}>
                <i> <Image height="15" width="14" src="/images/icon/search-icon.png" alt="" /></i>
                <input 
                    type="text" 
                    onChange={(e)=>handleChange(
                        e.target.value
                    )}
                    placeholder="Search.." 
                />
            </div>
            <ul className={style.search_player_list}>
                { results && results.length>0 && results.map((item, index)=>{
                    return(
                        <li key={ index }> 
                            <Link href={`/player/${ item.slug }/${ item._id }`}>
                                <a>
                                    <Image height="39" width="42" 
                                        src={ item.image }
                                        alt={`${ item.firstName } ${ item.lastName }`}
                                    />
                                    <h5>{ item.firstName } { item.lastName }</h5>
                                </a>
                            </Link>  
                        </li>
                    )
                })
                    
                }

                {/* <li> <Link href="/">
                    <a>
                        <Image height="39" width="42" src="/images/player/search-player.png" alt="" />
                        <h5>Allen Lazard</h5></a>
                </Link>  </li> */}
            </ul>

        </div>
    );
};

export default FollowingPlayersCard;