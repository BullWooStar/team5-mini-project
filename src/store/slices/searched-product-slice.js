import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getSearchedProduct = createAsyncThunk(
  "searchedProductSlice/getAllProduct",
  async (payload) => {
    const data = await axios.get(`http://www.needmoney.ml/products/${payload}`);
    return data.data;
  }
);

const searchedProductSlice = createSlice({
  name: "searchedProductSlice",
  initialState: {
    initialData: [],
    filteredData: [],
    isLoading: false,
    isSearched: false,
  },
  reducers: {
    updateSearedFilteredProduct(state, action) {
      state.filteredData = action.payload;
    },
    changeIsSearched(state) {
      state.isSearched = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSearchedProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getSearchedProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.initialData = action.payload;
      state.filteredData = action.payload;
    });
    builder.addCase(getSearchedProduct.rejected, (state) => {
      state.isLoading = false;
      throw new Error("FETCHING ERROR");
    });
  },
});

export default searchedProductSlice;
export { getSearchedProduct };
export const searchedProductActions = searchedProductSlice.actions;
