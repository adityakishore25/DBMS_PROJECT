import { createSlice } from "@reduxjs/toolkit";

const paperSlice = createSlice({
  name: "paper",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove:(state,action)=>{
      return state.filter((item)=>item.id !== action.payload);
    },
  },
});

export const { add,remove } = paperSlice.actions;
export default paperSlice.reducer;
