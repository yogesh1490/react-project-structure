import API from './../utils/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApiSlice = createApi({
  reducerPath: API.USER.REDUCER_PATH,
  baseQuery: fetchBaseQuery({ baseUrl: API.USER.BASE_URL }), // Updated to use json-server
  endpoints: (builder) => ({
    getUsers: builder.query<any, void>({
      query: () => API.USER.ENDPOINT.USERS,
    }),
    getColumns: builder.query<any, void>({
      query: () => API.USER.ENDPOINT.COLUMNS,
    }),
  }),
});

export const { useGetUsersQuery, useGetColumnsQuery } = userApiSlice;
