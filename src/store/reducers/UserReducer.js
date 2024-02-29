import { createSlice } from "@reduxjs/toolkit";
const initialData = {
  // id:"",
  // firstName: "",
  // lastName: "",
  // email: "",
  // password: "",
  // token:""
};
const userSlice = createSlice({
  name: "user",
  initialState: initialData,
  reducers: {
    setUser: async (state, action) => {
      return {...state, ...action.payload }
    }
  },
});

export const { clearStore,setUser } = userSlice.actions;
export default userSlice.reducer;
