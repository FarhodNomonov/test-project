import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, { payload }) => (state = payload),
  },
});

export const { setPosts } = postsSlice.actions;

export default postsSlice.reducer;
