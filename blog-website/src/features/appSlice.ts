import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";
import type { GoogleUser } from "../types/auth";
import type { GNewsArticle } from "../types/gnews";

type AppState = {
  isSignedIn: boolean;
  user: GoogleUser | null;

  searchQuery: string; // submitted query
  articles: GNewsArticle[]; // ALWAYS array
};

const initialState: AppState = {
  isSignedIn: false,
  user: null,
  searchQuery: "Google",
  articles: [],
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<GoogleUser>) => {
      state.isSignedIn = true;
      state.user = action.payload;
    },
    signOut: (state) => {
      state.isSignedIn = false;
      state.user = null;
      state.searchQuery = "Google";
      state.articles = [];
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setArticles: (state, action: PayloadAction<GNewsArticle[]>) => {
      state.articles = action.payload;
    },
  },
});

export const { signIn, signOut, setSearchQuery, setArticles } =
  appSlice.actions;

export const selectIsSignedIn = (state: RootState) => state.app.isSignedIn;
export const selectUser = (state: RootState) => state.app.user;
export const selectSearchQuery = (state: RootState) => state.app.searchQuery;
export const selectArticles = (state: RootState) => state.app.articles;

export default appSlice.reducer;
