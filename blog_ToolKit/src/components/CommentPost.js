import React from "react";
import { useRef } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../utils/firebase.config";

const CommentPost = ({ post, user }) => {
  const answerContent = useRef();
  console.log(post.comments);
  const handleComment = (e) => {
    e.preventDefault();

    let data = [];

    if (post.comments === null) {
      data = [
        {
          commentAuthor: user.displayName,
          text: answerContent.current.value,
        },
      ];
    } else {
      data = [
        ...post.comments,
        {
          commentAuthor: user.displayName,
          text: answerContent.current.value,
        },
      ];
    }

    updateDoc(doc(db, "posts", post.id), { comments: data });
    answerContent.current.value = "";
  };
  return (
    <div className="comment-container">
      <h5 className="comment-title">Commentaires</h5>
      {/* MAP */}

      {user ? (
        <form onSubmit={(e) => handleComment(e)}>
          <textarea
            placeholder="Envoyer un commentaire"
            ref={answerContent}
          ></textarea>
          <input type="submit" />
        </form>
      ) : (
        <p>Vous devez être connecté pour poster un commentaire</p>
      )}
    </div>
  );
};

export default CommentPost;
