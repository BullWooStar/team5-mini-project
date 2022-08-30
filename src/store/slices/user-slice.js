import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

// createAsyncThunk는 비동기 작업을 처리하는 엑션을 만들어 준다.
// 회원가입
export const doSingUp = createAsyncThunk(
  'posts/getPosts', // 엑션 타입
  async (userInput) => {
    try {
        const response = await axios.post('http://localhost:8000/signup', userInput)
        return response.data
    } catch (e) {
      console.log(e)
    }
})

export const doLogIn = createAsyncThunk(
  'posts/getPosts', // 엑션 타입
  async (userInput) => {
    try {
        const response = await axios.post('http://localhost:8000/login', userInput)
        return response.data
    } catch (e) {
      console.log(e)
    }
})

const initialState = {
  loading: '',
  posts: null,
  error: null,
};

// 리듀서 + 엑션
export const signUpSlice = createSlice({
  name: 'users', // 리듀서 이름
  initialState, // 초기값
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doSingUp.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(doSingUp.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.posts = action.payload;
    });
    builder.addCase(doSingUp.rejected, (state) => {
      state.loading = 'failed';
    });
  },
});

// 컨테이너
export const useSignUp = () => {
  const posts =  useSelector((state) => state.counter.posts)
  const loading =  useSelector((state) => state.counter.loading)
  const dispatch = useDispatch();

  return {
    posts,
    dispatch,
  };
}

// 리듀서 내보내기
export default signUpSlice.reducer;