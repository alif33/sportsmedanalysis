import Link from 'next/link';
import { useEffect, useState } from 'react';
import { watchlistByLeague } from '../../../__lib__/helpers/Filter';
import Card from './Card';
import style from './PlayerSection.module.css';

const PlayerTab = ({ players }) => {
    const [ plyrs, setPlyrs ] = useState([])
    const [toggleState, setToggleState] = useState(1);
    const titles = ['NFL', 'NBA', 'MLB'];

    useEffect(()=>{
        setPlyrs(watchlistByLeague(players));
    }, [])

    const toggleTab = index => {
        setToggleState(index)
    }

    return (

        <div>
            <div className='d-flex'>
                {
                    titles.map((item, index) => {
                        return (
                            <h3
                                key={index}
                                className={toggleState === index + 1 ? `${style.nfl_3rd_title_active} ${style.nfl_3rd_title}` : style.nfl_3rd_title}
                                onClick={() => toggleTab(index + 1)}
                            >{item}</h3>
                        )
                    })
                }
            </div>

            {
                titles.map((item, index) => {
                    return (
                        <div key={index} className={toggleState === index + 1 ? 'd-block' : 'd-none'}>
                            <Card players={ plyrs[item] } />
                            <Link href={`/${item.toLowerCase()}`}><a className={style.see_all_news}>See All News</a></Link>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default PlayerTab;


