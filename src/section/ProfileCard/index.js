import Image from 'next/image';
import Link from 'next/link';


const ProfileCard = () => {
    return (
        <div className="profile-card">
            <div className="d-flex align-items-center justify-content-between">
                <h6>Profile</h6> <Image height="5" width="16" src="/images/icon/three-dote.png" alt="" />
            </div>
            <div className="profile-card-img-name mt-2">
                <Image height="60" width="60" src="/images/user/user.png" alt="" />
                <div className="profile-card-name">
                    <h6>John Doe</h6>
                    <p>Montreal, QC</p>
                </div>
            </div>


            <div className="profile-post-and-following">
                <div className="profile-posts">
                    <Image height="12" width="12" src="/images/icon/posts.png" alt="" /><p>218 Posts</p>
                </div>
                <div className="profile-following">
                    <Image height="15" width="15" src="/images/icon/followers.png" alt="" /><p>220 Followers</p>
                </div>
            </div>

            <div className="profile-menu">
                <ul>
                    <li className="active"> <Link href="/"><a><Image height="15" width="15" src="/images/icon/newsfeed.png" alt="" /> <h5>News Feed</h5></a></Link> </li>
                    <li> <Link href="/"><a><Image height="15" width="20" src="/images/icon/players.png" alt="" /> <h5>Following Players</h5></a></Link> </li>
                    <li> <Link href="/"><a><Image height="15" width="15" src="/images/icon/right.png" alt="" /> <h5>Saved</h5></a></Link> </li>
                    <li> <Link href="/"><a><Image height="15" width="15" src="/images/icon/logout.png" alt="" /> <h5>Logout</h5></a></Link> </li>
                </ul>
            </div>
        </div>
    );
};

export default ProfileCard;