import Image from 'next/image';
import Link from 'next/link';
import slugify from 'slugify';
import style from './LiveWatch.module.css';

const LiveWatchHeader = ({ video }) => {
    return (
        <div className="bg-black">
            <div className={style._smd_live_watch_bg} style={{ backgroundImage: `url('https://i.ytimg.com/vi/${ video.videoId }/maxresdefault.jpg')` }}>
                {/* <button className={style._smd_live_btn}>Live</button> */}
                <Link href={`/watch/${ slugify(video.title, "-") }/${ video._id }`} >
                    <a className={style._smd_live_video_tilte}>
                        <Image height='100' width='100' src="/images/watch/play-btn-icon.png" alt="" />
                        <h2>{ video.title }</h2>
                    </a>
                </Link>
            </div>
            <div className={style._smd_watch_system}>
                <p>Watch anywhere, anytime</p>
                <ul>
                    <li><Image
                        height="16" width="52" src="/images/watch/roku.png" alt="" />
                    </li>
                    <li><Image layout="responsive" height="17" width="37" src="/images/watch/apple-tv.png" alt="" /></li>
                    <li><Image layout="responsive" height="17" width="14" src="/images/watch/apple.png" alt="" /></li>
                    <li><Image height="18" width="60" src="/images/watch/amazon.png" alt="" /></li>
                    <li><Image height="18" width="21" src="/images/watch/brodcast.png" alt="" /></li>
                    <li><Image height="20" width="17" src="/images/watch/andu.png" alt="" /></li>
                    <li><Image height="20" width="46" src="/images/watch/lg.png" alt="" /></li>
                    <li><Image height="14" width="63" src="/images/watch/vizio.png" alt="" /></li>
                </ul>
            </div>
        </div>
    );
};

export default LiveWatchHeader;