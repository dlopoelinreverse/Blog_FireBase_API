import React from "react";
import { useRef } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../utils/firebase.config";
import CommentCard from "./CommentCard";
import { useDispatch } from "react-redux";
import { addComment } from "../feature/post.slice";

const CommentPost = ({ post, user }) => {
  const answerContent = useRef();
  const dispatch = useDispatch();
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
      console.log(post.comments);
      data = [
        ...post.comments,
        {
          commentAuthor: user.displayName,
          text: answerContent.current.value,
        },
      ];
    }

    updateDoc(doc(db, "posts", post.id), { comments: data }).then(() => {
      dispatch(addComment([post.id, data]));
    });
    answerContent.current.value = "";
  };
  return (
    <div className="comment-container">
      <h5 className="comment-title">Commentaires</h5>
      {post.comments &&
        post.comments.map((comment, index) => (
          <CommentCard key={index} comment={comment} />
        ))}

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
