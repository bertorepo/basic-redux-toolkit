import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SERVER_API_URL } from "../../constants.js";
import { pause } from "../../utils/index.js";

// export const fetchUsers = createAsyncThunk("users/fetch", async () => {
//   const response = await axios.get(`${SERVER_API_URL}/users`);

//   // DEV ONLY!!
//   await pause(1000);

//   return response.data;
// });
