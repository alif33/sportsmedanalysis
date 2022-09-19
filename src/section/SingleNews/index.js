import Image from "next/image";
import React, { useEffect, useState } from "react";
import PostComment from "../../components/PostComment";
import SimilarNews from "../../components/SimiliarNews";
import TopNews from "../../components/TopNews";
import SinglePageComment from "../../components/SinglePageComment";
import style from "./SingleNews.module.css";
import single from "../../../pages/[...slug]";
import Favorite from "../../components/svg/Favorite";
import MessageIcon from "../../components/svg/MessageIcon";
import ShareIcon from "../../components/ShareIcon";
import { RiArrowDownSFill } from "react-icons/ri";
import ShareModal from "../../components/ShareModal";

const SingleNews = ({ post, posts, topPosts, _comments }) => {
  const [comments, _setComments] = useState();

  useEffect(() => {
    _setComments(_comments);
  }, []);

  

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
              <Favorite 

              />
              {/* <span>521K</span> */}
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
