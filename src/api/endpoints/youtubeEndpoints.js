import { apiSlice } from "../apiSlice";

export const youtubeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getYoutubeAuthorize: builder.query({
      query: (uid) => `/user/public/authorize?userId=${uid}`,
    }),
    getYoutubeLinkStatus: builder.query({
      query: (uid) => `/user/private/youtube/linkstatus?userId=${uid}`,
    }),
    getYoutubeData: builder.query({
      query: (uid) => `/user/public/youtube/linkstatus?userId=${uid}`,
    }),
  }),
});

export const {
  useLazyGetYoutubeAuthorizeQuery,

  useLazyGetYoutubeDataQuery,
  useGetYoutubeLinkStatusQuery,
} = youtubeApiSlice;
