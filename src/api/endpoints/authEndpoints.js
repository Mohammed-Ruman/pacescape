import { apiSlice } from "../apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (credentials) => ({
        url: "/user/public/signup",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "/api/v1/auth/authenticate",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    logout: builder.query({
      query: () => "/logout",
    }),
  }),
});

export const { useRegisterMutation } = authApiSlice;
export const { useLoginMutation } = authApiSlice;
export const { useLogoutQuery } = authApiSlice;
