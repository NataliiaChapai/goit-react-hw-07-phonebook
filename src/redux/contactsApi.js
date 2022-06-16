import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://62a901b1ec36bf40bdb18d87.mockapi.io' }),
  tagTypes: ['Contacts'],
  endpoints: (builder) => ({
    getContacts: builder.query ({
      query: () => '/contacts',
      providesTags: ['Contacts']
    }),
    addContacts: builder.mutation({
      query: (value) => ({
        url: '/contacts',
        method: 'POST',
        body: value,
      }),
      invalidatesTags: ['Contacts']
    }),
      removeContacts: builder.mutation({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts']
    }),
  }),
})

export const { useGetContactsQuery, useAddContactsMutation, useRemoveContactsMutation } = contactsApi;