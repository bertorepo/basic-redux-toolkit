import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SERVER_API_URL } from "../../constants";
import { faker } from "@faker-js/faker";
import { pause } from "../../utils";

export const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_API_URL,
    fetchFn: async (...args) => {
      await pause(500);
      return fetch(...args);
    },
  }),
  tagTypes: ["Albums"],
  endpoints: (builder) => ({
    fetchAlbums: builder.query({
      query: (user) => ({
        url: "/albums",
        method: "GET",
        params: {
          userId: user.id,
        },
      }),
      providesTags: (result, error, user) => {
        return [
          ...result.map(({ id }) => ({ type: "Albums", id: id })),
          { type: "UsersAlbum", id: user.id },
        ];
      },
    }),

    addAlbum: builder.mutation({
      query: (user) => ({
        url: "/albums",
        method: "POST",
        body: {
          name: faker.system.fileName(),
          userId: user.id,
        },
      }),
      invalidatesTags: (result, error, user) => [
        { type: "UsersAlbum", id: user.id },
      ],
    }),

    removeAlbum: builder.mutation({
      query: (album) => ({
        url: `/albums/${album.id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, album) => [
        { type: "Albums", id: album.id },
      ],
    }),
  }),
});

export const {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} = albumsApi;
