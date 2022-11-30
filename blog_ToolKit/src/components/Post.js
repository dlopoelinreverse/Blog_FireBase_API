import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../utils/firebase.config";
import Delete from "./Delete";
import { dateFormater } from "../utils/dateFormater";
import CommentPost from "./CommentPost";

const Post = ({ post, user }) => {
  const [edit, setEdit] = useState(false);
  const [editMessage, setEditMessage] = useState(null);

  const handleEditMessage = () => {
    setEdit(false);

    if (editMessage)
      updateDoc(doc(db, "posts", post.id), { message: editMessage });
  };

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
            <span className="btn" onClick={() => setEdit(!edit)}>
              <i className="fa-solid fa-pen-to-square"></i>
            </span>
            <Delete postId={post.id} />
          </div>
        )}
      </div>

      {edit ? (
        <>
          <textarea
            autoFocus
            defaultValue={editMessage ? editMessage : post.message}
            onChange={(e) => setEditMessage(e.target.value)}
          ></textarea>
          <button className="edit-button" onClick={() => handleEditMessage()}>
            Editer le message
          </button>
        </>
      ) : (
        <p>{editMessage ? editMessage : post.message}</p>
      )}

      <CommentPost post={post} user={user} />
    </div>
  );
};

export default Post;
