import Image from 'next/image';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { authPost, getData } from '../../../__lib__/helpers/HttpService';
import CommentCard from '../sectionCard/CommentCard';
import postCard from './PostCard.module.css';

const PostCard = ({ _id, title, _author, image, comments }) => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [_comments_, _setComments_] = useState();
  const [comment, setComment] = useState("");
  const { user } = useSelector(state=>state);
  const { __u__ } = user;

  const fetchComments = ()=>{
    setLoading(true);
    getData(`post/comments?_id=${_id}`)
    .then(res=>_setComments_(res));
  }
  const handleShowComments = ()=>{
    setShow(!show);
    fetchComments();
  }

  const handleComment = event => {
    if (event.key === 'Enter') {
      if (user.isUser) {
        if (!comment && comment.length < 10) {
            toast.error("Comment is too short")
        } else {
            authPost(`post/comment/${_id}`, { comment }, __u__.token)
                .then(res => {
                    if (res.success) {
                        toast.success("Comment added successfully");
                        const { post } = res;
                        _setComments_(post._comments.reverse());
                        setComment("");
                    }
                })
                .catch(err => {

                })
        }
      } else {
          router.push("/auth/sign-in");
      }
    }
  }

  return (
    <div className={`${postCard.card2} mt-2`}>
      <div className={`d-flex align-items-center justify-content-between ${postCard.postProfile}`}>
        <div className={`d-flex align-items-center`}>
          <Image height="60" width="60" src="/images/user/user.png" alt="" />
          <div className={postCard.postProfileName}>
            <h6>{_author}</h6>
            <p>29 mins</p>
          </div>
        </div>
        <Image width="16" height="5" src="/images/icon/three-dote.png" alt="" />
      </div>

      <div className={`w-100 ${postCard.postImage}`}>
        <Image 
          height="427" 
          width="600" 
          src={image? image: "/images/post/post.png"}
          alt="" 
        />
      </div>

      <div className={`${postCard.postContent}`} >
        <p className={`${postCard.postDescription}`} >
          { title }
        </p>
      </div>


      <div className={`d-flex align-items-center justify-content-between ${postCard.postReactAndCommnetText}`}>
        <div className={`d-flex align-items-center ${postCard.postReact}`} >
          <Image height="19" width="19" src="/images/icon/like.png" alt="" />
          <Image height="19" width="19" src="/images/icon/heart.png" alt="" />
          <p>+15</p>
        </div>
        <div className={`d-flex align-items-center  ${postCard.commentText}`} >
          <p className="me-1">{comments} Comments</p>
        </div>
      </div>
      <div className={`${postCard.postReactAndCommnetText}`}>
        <div className={`d-flex align-items-center justify-content-between ${postCard.postReactAndCommnetBtn}`}>
          <div className={`d-flex align-items-center ${postCard.postButton}`} >
            <p className={`d-flex align-items-center  `}><Image height="19" width="19" src="/images/icon/like-icon.png" alt="" />Like</p>
            <p onClick={handleShowComments} className={`d-flex align-items-center ms-1`}><Image height="19" width="19" src="/images/icon/comment-icon.png" alt="" />Comment</p>
          </div>
        </div>
      </div>
      { show && (<>
      <div className={` ${postCard.postComment}`} >
        <div className={`${postCard.postCommentInput}`}>
          <input 
            type="text" 
            placeholder="Write a comment"
            value={comment}
            onChange={e=>setComment(e.target.value)} 
            onKeyDown={handleComment}
          />
        </div>
        {
          _comments_ && _comments_.length>0 && _comments_.map((item, index)=>{
            return(
              <CommentCard 
                key={index}
                name={item.name}
                comment={item.comment}
              />
            )
          })
        }
      </div>
      </>)
      }
    </div>
  );
};

export default PostCard;
