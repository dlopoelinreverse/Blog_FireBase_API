import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../utils/firebase.config";
import Delete from "./Delete";
import CommentPost1 from "./CommentPost1";
import { dateFormater } from "../utils/dateFormater";

const Post = ({ post, user }) => {
  const [edit, setEdit] = useState(false);
  const [editMessage, setEditMessage] = useState(null);

  return (
    <div className="post">
      <div className="post-header">
        <div className="left-part">
          <div className="title">
            <span>{post.author[0]}</span>
            <h2>{post.author}</h2>
          </div>
          <h5>Posté {dateFormater(post.date)}</h5>
        </div>
        {post.authorId === user?.uid && (
          <div className="right-part">
            <span onClick={() => setEdit(!edit)}>
              <i className="fa-solid fa-pen-to-square"></i>
            </span>
            <Delete postId={post.id} />
          </div>
        )}
      </div>

      <p>{post.message}</p>

      <CommentPost1 post={post} />
    </div>
  );
};

export default Post;
