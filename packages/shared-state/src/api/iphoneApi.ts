import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type IPhoneProduct = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  chipset: string;
  display: string;
  storage: string;
  color: string;
  category: string;
};

export const iphoneApi = createApi({
  reducerPath: 'iphoneApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    getIphones: builder.query<IPhoneProduct[], string | void>({
      query: (category) =>
        category
          ? `iphone-service/api/v1/iphones?category=${encodeURIComponent(category)}`
          : 'iphone-service/api/v1/iphones',
    }),
    getIphoneById: builder.query<IPhoneProduct, number>({
      query: (id) => `iphone-service/api/v1/iphones/${id}`,
    }),
  }),
});

export const { useGetIphonesQuery, useGetIphoneByIdQuery } = iphoneApi;
