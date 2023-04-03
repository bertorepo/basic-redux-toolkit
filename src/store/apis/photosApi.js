import { nanoid } from "@reduxjs/toolkit";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SERVER_API_URL } from "../../constants";
import { pause } from "../../utils";

export const photosApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_API_URL,
    fetchFn: async (...args) => {
      await pause(500);
      return fetch(...args);
    },
  }),
  tagTypes: ["Photos"],
  endpoints: (builder) => ({
    fetchPhotos: builder.query({
      query: (album) => ({
        url: "/photos",
        method: "GET",
        params: {
          albumId: album.id,
        },
      }),
      providesTags: (result, error, album) => {
        const tags = result.map((photo) => {
          return { type: "Photos", id: photo.id };
        });
        tags.push({ type: "AlbumsPhotos", id: album.id });
        return tags;
      },
    }),

    addPhoto: builder.mutation({
      query: (album) => ({
        url: "/photos",
        method: "POST",
        body: {
          imageUrl: `https://picsum.photos/seed/${nanoid()}/200/300`,
          albumId: album.id,
        },
      }),
      invalidatesTags: (result, error, album) => [
        { type: "AlbumsPhotos", id: album.id },
      ],
    }),

    removePhoto: builder.mutation({
      query: (photo) => ({
        url: `/photos/${photo.id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, photo) => [
        { type: "Photos", id: photo.id },
      ],
    }),
  }),
});

export const {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation,
} = photosApi;
