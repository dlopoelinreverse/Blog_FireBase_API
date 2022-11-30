import { useRef } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../utils/firebase.config";
import { useDispatch } from "react-redux";
import { addPost } from "../feature/post.slice";

const CreatePost = ({ uid, displayName }) => {
  const message = useRef();
  const dispatch = useDispatch();

  const handlePost = async (e) => {
    e.preventDefault();

    const data = {
      author: displayName,
      authorId: uid,
      message: message.current.value,
      comments: null,
      date: Date.now(),
    };
    await addDoc(collection(db, "posts"), data).then(() => {
      dispatch(addPost(data));
    });
    message.current.value = "";
  };
  return (
    <div className="new-post-modal">
      <form onSubmit={(e) => handlePost(e)}>
        <textarea placeholder="Votre message..." ref={message}></textarea>
        <input type="submit" value="Poster le message" />
      </form>
    </div>
  );
};

export default CreatePost;