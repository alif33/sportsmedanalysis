import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../store/user/actions";
import BookmarkIcon from "../../components/svg/BookmarkIcon";
import GroupPlayers from "../../components/svg/GroupPlayers";
import NewsFeedIcon from "../../components/svg/NewsFeedIcon";
import style from "./ProfileCard.module.css";

const ProfileCard = ({ info, _bookmarks, setNewsfeedTap, newsfeedTap }) => {
  const { user } = useSelector((state) => state);
  const { __u__ } = user;
  // console.log(__u__);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogOut = () => {
    dispatch(logOut());
    router.push("/auth/sign-in");
  };

  return (
    <div className={style.profile_card}>
      <div className="d-flex align-items-center justify-content-between">
        <h6>Profile</h6>{" "}
        <Image height="5" width="16" src="/images/icon/three-dote.png" alt="" />
      </div>
      <div className={`${style.profile_card_img_name} mt-2`}>
        <Image height="60" width="60" src="/images/user/user.png" alt="" />
        <div className="profile-card-name">
          <h6>{__u__.info.fullName}</h6>
          <p>{__u__.info.userName}</p>
        </div>
      </div>

      <div className={style.profile_post_and_following}>
        <div className="profile-posts">
          <Image height="12" width="12" src="/images/icon/posts.png" alt="" />
          <p>{__u__.info._bookmarks?.length} Posts</p>
        </div>
        <div className="profile-following">
          <Image
            height="15"
            width="15"
            src="/images/icon/followers.png"
            alt=""
          />
          <p>{__u__.info._players.length} Following</p>
        </div>
      </div>

      <div className={style.profile_menu}>
        <ul>
          <li className={newsfeedTap === "posts" && style.active}>
            <button onClick={() => setNewsfeedTap("posts")}>
              <NewsFeedIcon />
              <h5>News Feed</h5>
            </button>
          </li>

          <li className={newsfeedTap === "following-players" && style.active}>
            <button onClick={() => setNewsfeedTap("following-players")}>
              <GroupPlayers />
              <h5>Following Players</h5>
            </button>
          </li>

          <li className={newsfeedTap === "bookmarks" && style.active}>
            <button onClick={() => setNewsfeedTap("bookmarks")}>
              <BookmarkIcon />
              <h5>Bookmarks</h5>
            </button>
          </li>

          <li>
            <button onClick={handleLogOut}>
              <Image
                height="15"
                width="15"
                src="/images/icon/logout.png"
                alt=""
              />{" "}
              <h5>Logout</h5>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
