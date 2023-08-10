import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  PayloadAction,
  SliceCaseReducers,
  createSlice,
} from "@reduxjs/toolkit";

import { auth } from "@/firebase";
import {
  UserCredential,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export interface UserState {
  isLoggedIn: boolean;
  user: {
    uid: string;
    email: string;
    authority: "manager" | "cashier" | "admin";
  } | null;
}

export const userSlice = createSlice<UserState, SliceCaseReducers<UserState>>({
  name: "user",
  initialState: {
    isLoggedIn: false,
    user: {
      uid: "",
      email: "",
      authority: "cashier",
    },
  },
  reducers: {
    setUserData: (state, action: PayloadAction<UserState>) => {
      state.isLoggedIn = true;
      state.user = {
        uid: action.payload?.user?.uid ?? "",
        email: action.payload?.user?.email ?? "",
        authority: "cashier",
      };
    },
    clearUserData: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },

  extraReducers: (builder) => {
    builder.addMatcher(login.matchFulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.user = {
        uid: action.payload?.user.uid ?? "",
        email: action.payload?.user.email ?? "",
        authority: "cashier",
      };
    });
    builder.addMatcher(logout.matchFulfilled, (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    });
  },
});

const userAPISlice = createApi({
  reducerPath: "userAPI",
  baseQuery: fakeBaseQuery(),
  endpoints: (build) => ({
    login: build.mutation<
      UserCredential | null,
      { email: string; password: string }
    >({
      async queryFn({ email, password }) {
        try {
          return await signInWithEmailAndPassword(auth, email, password);
        } catch (err: any) {
          return err;
        }
      },
    }),

    logout: build.mutation<void, void>({
      async queryFn() {
        try {
          return await signOut(auth);
        } catch (err: any) {
          return err;
        }
      },
    }),
  }),
});

const { login, logout } = userAPISlice.endpoints;

export const { useLoginMutation } = userAPISlice;

export const { setUserData, clearUserData } = userSlice.actions;

export { userAPISlice };

export default userSlice.reducer;
