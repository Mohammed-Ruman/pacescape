import { apiSlice } from "../apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    verifyToken: builder.mutation({
      query: (token) => ({
        url: `/user/public/verify/token?token=${token}`,
        method: "POST",
      }),
    }),
    sendResetPasswordLink: builder.mutation({
      query: (email) => ({
        url: `/user/public/verify/reset/password?email=${email}`,
        method: "POST",
      }),
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        url: `/user/public/verify/reset`,
        method: "POST",
        body: {
          token: data.token,
          newPassword: data.newPassword,
          confirmNewPassword: data.confirmNewPassword,
        },
      }),
    }),
    updatePassword: builder.mutation({
      query: (data) => ({
        url: `/user/public/verify/reset`,
        method: "PUT",
        body: {
          userEmail: data.userEmail,
          oldPassword: data.oldPassword,
          newPassword: data.newPassword,
          confirmNewPassword: data.confirmNewPassword,
        },
      }),
    }),

    login: builder.mutation({
      query: (credentials) => ({
        url: "/api/v1/auth/authenticate",
        method: "POST",
        body: credentials,
      }),
    }),
    logout: builder.query({
      query: () => "/user/public/api/v1/auth/logout",
    }),
    brandOwnerInfo: builder.mutation({
      query: (data) => ({
        url: `/user/public/brandowner/signup`,
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data;",
        },
        body: {
          email: data.email,
          companyName: data.companyName,
          description: data.description,
          gstin: data.gstin,
          tin: data.tin,
          file: data.file,
        },
      }),
    }),
    verifyEmail: builder.mutation({
      query: (token) => ({
        url: `/user/public/verify/token?token=${token}`,
        method: "POST",
      }),
    }),
    updateProfilePic: builder.mutation({
      query: (data) => ({
        url: `/user/public/update/profile/pic`,
        method: "POST",
        body: {
          email: data.email,
          file: data.file,
        },
      }),
    }),
    deleteProfilePic: builder.mutation({
      query: (email) => ({
        url: `/user/public/delete/profile/pic?email=${email}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutQuery, useBrandOwnerInfoMutation } =
  authApiSlice;

export const { useVerifyTokenMutation, useVerifyEmailMutation } = authApiSlice;
export const {
  useResetPasswordMutation,
  useUpdatePasswordMutation,
  useSendResetPasswordLinkMutation,
} = authApiSlice;

export const { useUpdateProfilePicMutation, useDeleteProfilePicMutation } =
  authApiSlice;
