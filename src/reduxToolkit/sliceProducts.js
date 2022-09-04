import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    value: [
      {
        name: "",
        description: "",
        imgurl: "",
        category: "",
        prix: "",
        userlike: [],
      },
    ],
  },
  reducers: {
    setProducts: (state, action) => {
      state.value = action.payload;
    },
    addProduct: (state, action) => {
      state.value = [action.payload, ...state.value];
    },
    deleteProduct: (state, action) => {
      state.value = state.value.filter((e) => e._id !== action.payload);
    },
    updateProduct: (state, action) => {
      state.value[state.value.findIndex((e) => e._id === action.payload._id)] =
        action.payload;
    },
  },
});
export const { setProducts, addProduct, deleteProduct, updateProduct } =
  productsSlice.actions;
export default productsSlice.reducer;
