import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { refreshToken: null, accessToken: null },
  reducers: {
    setCredentials: (state, action) => {
      const { refreshToken, accessToken, userData } = action.payload;
      state.refreshToken = refreshToken;
      state.accessToken = accessToken;
      state.userData = userData;
    },
    logOut: (state, action) => {
      state.refreshToken = null;
      state.accessToken = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.refreshToken;
export const selectCurrentToken = (state) => state.auth.accessToken;
