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
    deletePost: (state, { payload }) => {
      state.posts = state.posts.filter((pic) => pic.id !== payload);
    },
    addComment: (state, { payload }) => {
      state.posts = state.posts.map((post) => {
        if (post.id === payload[0]) {
          return {
            ...post,
            comments: payload[1],
          };
        } else {
          return post;
        }
      });
    },
  },
});

export const { getPosts, addPost, deletePost, addComment } = postSlice.actions;
export default postSlice.reducer;
