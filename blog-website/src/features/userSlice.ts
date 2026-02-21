// userSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store"; // adjust path if needed

type UserState = {
  isSingedIn: boolean;
  userData: unknown | null;
  serachInput: string;
  blogData: unknown | null;
};

const initialState: UserState = {
  isSingedIn: false,
  userData: null,
  serachInput: "tech",
  blogData: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSingedIn: (state, action: PayloadAction<boolean>) => {
      state.isSingedIn = action.payload;
    },
    setUserData: (state, action: PayloadAction<unknown>) => {
      state.userData = action.payload;
    },
    setInput: (state, action: PayloadAction<string>) => {
      state.serachInput = action.payload;
    },
    setBlogData: (state, action: PayloadAction<unknown>) => {
      state.blogData = action.payload;
    },
  },
});

export const { setSingedIn, setUserData, setBlogData, setInput } =
  userSlice.actions;

export const selectSignedin = (state: RootState) => state.user.isSingedIn;
export const selectUserData = (state: RootState) => state.user.userData;
export const selectSerachInput = (state: RootState) => state.user.serachInput;
export const selectBlogData = (state: RootState) => state.user.blogData;

export default userSlice.reducer;
