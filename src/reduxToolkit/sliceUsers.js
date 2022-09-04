import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    value: [
      {
        name: "",
        lastname: "",
        email: "",
        password: "",
        role: "",
        blocked: false,
      },
    ],
  },
  reducers: {
    setUsers: (state, action) => {
      state.value = action.payload;
    },
    blockeduser :(state,action)=>{
     
      state.value[state.value.findIndex(e=>e._id == action.payload)].blocked = true
    },
    unblockeduser :(state,action)=>{

      state.value[state.value.findIndex(e=>e._id == action.payload)].blocked = false
    },
    
  },
});
export const { setUsers,blockeduser,unblockeduser } = usersSlice.actions;
export default usersSlice.reducer;
