import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_API_URL } from "../../constants";
import { faker } from "@faker-js/faker";
import axios from "axios";
import { pause } from "../../utils";

// export const addUser = createAsyncThunk("user/add", async () => {
//   const response = await axios.post(`${SERVER_API_URL}/users`, {
//     name: faker.name.fullName(),
//     email: faker.internet.email(),
//     avatar: faker.image.avatar(),
//   });

//   return response.data;
// });
