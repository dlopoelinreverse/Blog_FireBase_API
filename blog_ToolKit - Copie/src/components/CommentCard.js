import { dateFormater } from "../utils/dateFormater";

const CommentCard = ({ comment }) => {
  return (
    <div className="comment-post">
      <div className="comment-header">
        <h5>Commenté {dateFormater(comment.date)}</h5>
      </div>
      <div className="comment-content">
        <h5>{comment.commentAuthor}</h5>
        <p>{comment.text}</p>
      </div>
    </div>
  );
};

export default CommentCard;
