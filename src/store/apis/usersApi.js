import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SERVER_API_URL } from "../../constants";
import { faker } from "@faker-js/faker";

export const usersApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({ baseUrl: SERVER_API_URL }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    fetchUsers: builder.query({
      providesTags: (result) => generateTags(result),
      query: () => "/users",
    }),
    addUser: builder.mutation({
      invalidatesTags: [{ type: "Users", id: "LIST" }],
      query: () => ({
        url: "/users",
        method: "POST",
        body: {
          name: faker.name.fullName(),
          email: faker.internet.email(),
          avatar: faker.image.avatar(),
        },
      }),
    }),
    removeUser: builder.mutation({
      invalidatesTags: (result, error, user) => [
        { type: "Users", id: user.id },
      ],
      query: (user) => ({
        url: `/users/${user.id}`,
        method: "DELETE",
      }),
    }),
  }),
});

const generateTags = (result) => {
  return result
    ? [
        ...result.map(({ id }) => ({ type: "Users", id: id })),
        { type: "Users", id: "LIST" },
      ]
    : [{ type: "Users", id: "LIST" }];
};

export const { useFetchUsersQuery, useAddUserMutation, useRemoveUserMutation } =
  usersApi;
