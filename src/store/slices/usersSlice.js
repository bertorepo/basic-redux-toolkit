import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, addUser } from "../index";

// const usersSlice = createSlice({
//   name: "users",
//   initialState: {
//     isLoading: false,
//     error: null,
//     data: [],
//   },
//   extraReducers(builder) {
//     builder.addCase(fetchUsers.pending, (state, action) => {
//       state.isLoading = true;
//     });
//     builder.addCase(fetchUsers.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.data = action.payload;
//     });
//     builder.addCase(fetchUsers.rejected, (state, action) => {
//       state.isLoading = false;
//       state.error = action.error;
//     });

//     // adding a user
//     builder.addCase(addUser.pending, (state, action) => {
//       state.isLoading = true;
//     });
//     builder.addCase(addUser.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.data.push(action.payload);
//     });
//     builder.addCase(addUser.rejected, (state, action) => {
//       state.isLoading = false;
//       state.error = action.error;
//     });
//   },
// });

// export const userReducer = usersSlice.reducer;
