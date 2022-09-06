import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const asynPromotionFetch = createAsyncThunk(
  'promotion/asynPromotionFetch',
  async () => {
    const response = await axios.get('http://needmoney.ml/products/promotions')
    return response.data
  }
)

const PromotionProductSlice = createSlice({
  name: 'promotion',
  initialState: {
    products: [],
    loading: false
  },
  extraReducers: (builder) => {
    builder.addCase(asynPromotionFetch.pending, (state) => {
      state.loading = true
    })
    builder.addCase(asynPromotionFetch.fulfilled, (state, { payload }) => {
      state.loading = false
      state.products = payload
    })
    builder.addCase(asynPromotionFetch.rejected, (state) => {
      state.loading = false
    })
  }
})

export default PromotionProductSlice.reducer
export const getPromotionData = (state) => state.promotion