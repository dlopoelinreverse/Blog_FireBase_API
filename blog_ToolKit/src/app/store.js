// init store

import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../feature/post.slice";

export default configureStore({
  reducer: {
    // init reducer -> index.js
    posts: postsReducer,
  },
});
