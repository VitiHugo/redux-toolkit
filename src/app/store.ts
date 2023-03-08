import { configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "../features/posts/postsSlice";
import { userReducer } from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: userReducer
  }
})

type GetStateType = typeof store.getState
export type RootState = ReturnType<GetStateType>