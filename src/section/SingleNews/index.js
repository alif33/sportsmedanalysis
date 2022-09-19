import Image from "next/image";
import React, { useEffect, useState } from "react";
import PostComment from "../../components/PostComment";
import SimilarNews from "../../components/SimiliarNews";
import TopNews from "../../components/TopNews";
import SinglePageComment from "../../components/SinglePageComment";
import style from "./SingleNews.module.css";
import MessageIcon from "../../components/svg/MessageIcon";
import { RiArrowDownSFill } from "react-icons/ri";
import { BsBookmark, BsBookmarksFill } from "react-icons/bs";
import ShareModal from "../../components/ShareModal";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../../../__lib__/helpers/HttpService";
import { toast } from "react-hot-toast";
import { logedIn } from "../../../store/user/actions";

const SingleNews = ({ post, posts, topPosts, _comments }) => {
  const [comments, _setComments] = useState();
  const [bookmark, setBookmark] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  const { isUser, __u__ } = user;
  const { info } = __u__;

  useEffect(() => {
    _setComments(_comments);
  }, []);


  const Handlebookmark = () => {
    console.log("calling...");
    updateData(
      `/user/bookmark?__b=${post._id}`,
      { status: "ADD" },
      __u__.token
    ).then((res) => {
      if (res.success) {
        toast.success(`${res.message}`);
        const { token, info } = res;
        dispatch(
          logedIn({
            token,
            info,
          })
        );
      }
    });
  };
console.log(post._id);
  const removeBookmark = () => {
    updateData(`/user/bookmark?__b=${post._id}`, { status: "REMOVE" }, __u__.token).then(
      (res) => {
        if (res.success) {
          toast.success(`${res.message}`);
          const { token, info } = res;
          dispatch(
            logedIn({
              token,
              info,
            })
          );
        }
      }
    );
  };

  // console.log(info);

  return (
    <>
      <div className="row mt-5">
        <div className="col-md-8">
          <h1 className={style.title}>{post.title}</h1>
          <ul className={style.newsCateHour}>
            <li>{post.league}</li>
            <li>2 Hours ago</li>
          </ul>
          {/* <div className={style.postMaker}>
            <Image height="250" width="250" src={post.image} alt={post.title} />
            <h4>Cameron Williamson</h4>
          </div> */}

          <ul className={style.likeCommentShare}>
            <li>
              { isUser && info?._bookmarks?.includes(post._id) ? (
                <BsBookmarksFill 
                  onClick={removeBookmark} 
                />
              ) : (
                <BsBookmark 
                  onClick={Handlebookmark} 
                />
              )}
            </li>
            <li>
              <MessageIcon />
              <span>521K</span>
            </li>
            <li>
              <ShareModal />
            </li>
          </ul>
          <div className={style.postImage}>
            <Image
              height="593"
              width="1143"
              src={post.image}
              alt={post.title}
            />
          </div>
          <div className={style.descripton}>
            <p>{post.description}</p>
          </div>
          <PostComment _id={post._id} _setComments={_setComments} />
          {comments &&
            comments
              .reverse()
              .map((item, index) => (
                <SinglePageComment
                  key={index}
                  fullName={item.name}
                  comment={item.comment}
                />
              ))}
          <div className={style.loadMore}>
            <button>
              Load more comments <RiArrowDownSFill />
            </button>
          </div>
          {/* <SimilarNews /> */}
        </div>

        <div className="col-md-4">
          <h1 className={style.heading}>Related News</h1>
          {posts &&
            posts.map((item, index) => <SimilarNews key={index} post={item} />)}
          {/* <SimilarNews single={single} />
          <SimilarNews single={single} /> */}
          <h1 className={style.heading2}>Top News</h1>
          {topPosts &&
            topPosts.map((item, index) => <TopNews key={index} post={item} />)}
        </div>
      </div>
    </>
  );
};

export default SingleNews;
