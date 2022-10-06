import Image from "next/image";
import React, { useState } from "react";
import { imageResize, Sortern } from "../../../__lib__/helpers/Validator";
import CommentCard from "../sectionCard/CommentCard";
import postCard from "./PostCard.module.css";

const PostCard = ({ item }) => {
  const [commentTog, setCommentTog] = useState();

  const handleGetTime = (crTime) => {
    const d = new Date(crTime);
    let time = d.toLocaleTimeString();
    return time;
  };

  return (
    <div className={`${postCard.card2}`}>
      <div
        className={`d-flex align-items-center justify-content-between ${postCard.postProfile}`}
      >
        <div className={`d-flex align-items-center`}>
          <Image height="60" width="60" src="/images/user/user.png" alt="" />
          <div className={postCard.postProfileName}>
            <h6>{item?._author}</h6>
            <p> {handleGetTime(item?.createdAt)}</p>
          </div>
        </div>
        <Image width="16" height="5" src="/images/icon/three-dote.png" alt="" />
      </div>

      <div className={`w-100 ${postCard.postImage}`}>
        {/* <Image height="427" width="600" src="/images/post/post.png" alt="" /> */}
        {item && (
          <Image
            width="600"
            height="427"
            src={imageResize(item.image, "c_thumb,g_face,h_854,w_1200")}
            alt=""
          />
        )}
      </div>

      <div className={`${postCard.postContent}`}>
        <p className={`${postCard.postDescription}`}>
          {/* {Sortern(item && item.description, 30)} */}
          {item && item.description}
        </p>
      </div>

      <div
        className={`d-flex align-items-center justify-content-between ${postCard.postReactAndCommnetText}`}
      >
        <div className={`d-flex align-items-center ${postCard.postReact}`}>
          <Image height="19" width="19" src="/images/icon/like.png" alt="" />
          <Image height="19" width="19" src="/images/icon/heart.png" alt="" />
          <p>+15</p>
        </div>
        <div className={`d-flex align-items-center  ${postCard.commentText}`}>
          <p
            onClick={() => setCommentTog(!commentTog)}
            className="me-1 cursor-pointer"
          >
            {item?.comments} Comments
          </p>
          <p>5 Saved</p>
        </div>
      </div>

      <div className={`${postCard.postReactAndCommnetText}`}>
        <div
          className={`d-flex align-items-center justify-content-between ${postCard.postReactAndCommnetBtn}`}
        >
          <div className={`d-flex align-items-center ${postCard.postButton}`}>
            <p className={`d-flex align-items-center  `}>
              <Image
                height="19"
                width="19"
                src="/images/icon/like-icon.png"
                alt=""
              />
              Like
            </p>
            <p className={`d-flex align-items-center ms-1`}>
              <Image
                height="19"
                width="19"
                src="/images/icon/comment-icon.png"
                alt=""
              />
              Comment
            </p>
          </div>
          <div className={`d-flex align-items-center  ${postCard.postButton}`}>
            <p className={`d-flex align-items-center`}>
              <Image
                height="19"
                width="19"
                src="/images/icon/save.png"
                alt=""
              />
              Save
            </p>
          </div>
        </div>
      </div>

      <div className={` ${postCard.postComment}`}>
        <div className={`${postCard.postCommentInput}`}>
          <input type="text" placeholder="Write a comment" />
          <div className={`${postCard.postCommentInputIcon}`}>
            <i>
              {" "}
              <Image
                height="18"
                width="18"
                src="/images/icon/emoji.png"
                alt=""
              />
            </i>
            <i>
              {" "}
              <Image
                height="18"
                width="18"
                src="/images/icon/camera.png"
                alt=""
              />
            </i>
          </div>
        </div>

        {commentTog && (
          <>
            <CommentCard />
            <CommentCard />
          </>
        )}
      </div>
    </div>
  );
};

export default PostCard;
