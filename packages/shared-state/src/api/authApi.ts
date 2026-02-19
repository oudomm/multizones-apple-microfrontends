import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { UserProfile } from '../types';
import { loginUser, logoutUser } from '../slices/userSlice';

export type BffProfile = {
  isAuthenticated: boolean;
  uuid?: string;
  username?: string;
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  gender?: string;
  birthdate?: string;
  picture?: string;
  coverImage?: string;
  roles?: any;
};

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
    credentials: 'include',
    prepareHeaders: (headers) => {
      headers.set('Accept', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMe: builder.query<BffProfile | null, void>({
      query: () => 'auth/me',
      transformResponse: (response: BffProfile) => {
        if (!response?.isAuthenticated) return null;
        return response;
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data: profile } = await queryFulfilled;

          if (profile && profile.isAuthenticated) {
            const user: UserProfile = {
              id: profile.uuid ?? 'unknown',
              name: profile.fullName ?? profile.username ?? 'User',
              username: profile.username,
              email: profile.email ?? '',
              phoneNumber: profile.phoneNumber,
              gender: profile.gender,
              birthdate: profile.birthdate,
              avatar: profile.picture,
              coverImage: profile.coverImage,
            };
            dispatch(loginUser(user));
          } else {
            dispatch(logoutUser());
          }
        } catch {
          // BFF is down — don't crash UI
        }
      },
    }),
  }),
});

export const { useGetMeQuery } = authApi;
