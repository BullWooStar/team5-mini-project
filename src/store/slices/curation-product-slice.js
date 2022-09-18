import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const asynUserFetch = createAsyncThunk(
  'curation/asynUserFetch',
  async (token) => {
    const { data } = await axios.get(
      'http://needmoney.ml/user',{
        headers: {
        "Authorization": token
        }
      }
    )
    return data
  }
)

export const asynCurationFetch = createAsyncThunk(
  'curation/asynCurationFetch',
  async (token) => {
    const { data } = await axios.get(
      `http://needmoney.ml/products/recos`,{
        headers: {
        'Authorization': token
        }
      }
    )
    return data
  }
)

const curationProductSlice = createSlice({
  name: 'curation',
  initialState: {
    user: [],
    products: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(asynCurationFetch.pending, (state) => {
      state.loading = true
    })
    builder.addCase(asynCurationFetch.fulfilled, (state, { payload }) => {
      state.loading = false
      state.products = payload
    })
    builder.addCase(asynCurationFetch.rejected, (state, { payload }) => {
      state.loading = false
    })
    // 회원정보 가져오기
    builder.addCase(asynUserFetch.fulfilled, (state, { payload }) => {
      state.user = payload
    })
    builder.addCase(asynUserFetch.rejected, (state, { payload }) => {
      state.user = []
    })
  }
})

export default curationProductSlice.reducer
export const getCurationData = (state) => state.curation
