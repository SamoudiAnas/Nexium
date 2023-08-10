import { configureStore } from "@reduxjs/toolkit";
import userSlice, { userAPISlice } from "@/features/user/user-slice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    [userAPISlice.reducerPath]: userAPISlice.reducer,
  },
  middleware: (gDM) => gDM().concat(userAPISlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
