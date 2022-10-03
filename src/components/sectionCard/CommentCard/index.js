import Image from 'next/image';
import commentCardCss from './commentCardCss.module.css';

const CommentCard = ({name, comment}) => {
    return (
        <div className={`${commentCardCss.commentCard}`} >
            <div className={`${commentCardCss.commenterImg}`} >
                <Image height="40" width="40" src="/images/user/user.png" alt="" />
            </div>
            <div className={`${commentCardCss.commenterNameDesc}`} >
                <div className="d-flex align-items-center justify-content-between">
                    <h5>{name}</h5>
                    <p>5 mins</p>
                </div>
                <p>{comment}</p>
                {/* <div className={commentCardCss.commentLIkebtn}>
                    <button>Like</button>
                    <button>Reply</button>
                </div> */}
            </div>
        </div>
    );
};

export default CommentCard;