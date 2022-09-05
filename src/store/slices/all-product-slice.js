import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAllProduct = createAsyncThunk(
  "allProductSlice/getAllProduct",
  async () => {
    const data = await axios.get("http://www.needmoney.ml/products");
    return data.data;
  }
);

const allProductSlice = createSlice({
  name: "allProductSlice",
  initialState: {
    initialData: [],
    filteredData: [],
    isLoading: false,
  },
  reducers: {
    updateAllFilteredProduct(state, action) {
      state.filteredData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.initialData = action.payload;
      state.filteredData = action.payload;
    });
    builder.addCase(getAllProduct.rejected, (state) => {
      state.isLoading = false;
      throw new Error("FETCHING ERROR");
    });
  },
});

export default allProductSlice;
export { getAllProduct };
export const allProductActions = allProductSlice.actions;
