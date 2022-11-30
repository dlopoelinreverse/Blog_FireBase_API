import { createSlice } from "@reduxjs/toolkit";

// va regrouper les actions et les reducers au meme endroit
export const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: null,
  },
  reducers: {
    getPosts: (state, { payload }) => {
      // incrémenter le state, avec le payload, ce qui est transmit dans le dispatch
      state.posts = payload;
    },
    addPost: (state, { payload }) => {
      state.posts.push(payload);
    },
  },
});

export const { getPosts, addPost } = postSlice.actions;
export default postSlice.reducer;
