import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { DUMMY_DATA } from "../../utils/constants";

const getSearchedProduct = createAsyncThunk(
  "searchedProductSlice/getAllProduct",
  async (payload) => {
    // const data = await axios.get(`http://www.needmoney.ml/products/${payload}`);
    return DUMMY_DATA;
  }
);

const searchedProductSlice = createSlice({
  name: "searchedProductSlice",
  initialState: {
    searchedproductData: [],
    isLoading: false,
  },

  extraReducers: (builder) => {
    builder.addCase(getSearchedProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getSearchedProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.searchedproductData = action.payload;
    });
    builder.addCase(getSearchedProduct.rejected, (state) => {
      state.isLoading = false;
      throw new Error("FETCHING ERROR");
    });
  },
});

export default searchedProductSlice;
export { getSearchedProduct };
