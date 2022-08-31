import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const asynCurationFetch = createAsyncThunk(
  'curation/asynCurationFetch',
  async () => {
    const response = await axios.get(`URL/products/recos/${'user.id'}`)
    return response
  }
)

const curationProductSlice = createSlice({
  name: 'curation',
  initialState: {
    products: []
  },
  extraReducers: (builder) => {
    builder.addCase(asynCurationFetch.pending, () => {
      console.log('Loading')
    })
    builder.addCase(asynCurationFetch.fulfilled, (state, { payload }) => {
      state.products = payload
    })
    builder.addCase(asynCurationFetch.rejected, () => {
      console.log('Error')
    })
  }
})

export default curationProductSlice
export { asynCurationFetch }
export const getCurationData = (state) => state.curation
export const curationReducer = curationProductSlice.reducer
