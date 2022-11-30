import React from "react";

import { useState } from "react";
import { auth } from "../utils/firebase.config";

const CommentPost = ({ post, user }) => {
  const handleComment = () => {};
  return (
    <div className="comment-container">
      <h5 className="comment-title">Commentaires</h5>
      {/* MAP */}

      {user ? (
        <form onSubmit={(e) => handleComment()}>
          <textarea placeholder="Envoyer un commentaire"></textarea>
          <input type="submit" />
        </form>
      ) : (
        <p>Vous devez être connecté pour poster un commentaire</p>
      )}
    </div>
  );
};

export default CommentPost;
