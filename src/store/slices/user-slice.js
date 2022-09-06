import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
// import { act } from 'react-dom/test-utils';
import { useDispatch, useSelector } from 'react-redux';

// 로그인 엑션
export const doPost = createAsyncThunk(
  'posts/getPosts', // 엑션 타입
  async (userData) => {
    const [ userInput, pageName ] = userData
    try {
      const response = await axios.post(`http://www.needmoney.ml/${pageName}`, userInput)
      const data = response.data
      const authorization = response.headers.authorization
      // console.log(response)
      return { data, authorization }
    } catch (e) {
      console.log(e)
      return { errorMessage: e.response.data }
    }
})

const initialState = {
  loading: '',
  posts: null,
  error: null,
};

// 리듀서
export const usersSlice = createSlice({
  name: 'users', // 리듀서 이름
  initialState, // 초기값
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doPost.pending, (state, action) => {
      state.loading = 'pending';
    });
    builder.addCase(doPost.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.posts = action.payload;
    });
    builder.addCase(doPost.rejected, (state) => {
      state.loading = 'failed';
    });
  },
});

// 회원가입 컨테이너
export const useUsersContainer = () => {
  const posts =  useSelector((state) => state.users.posts)
  const error =  useSelector((state) => state.users.error)
  const dispatch = useDispatch();

  return {
    posts,
    error,
    dispatch,
  };
}

// 리듀서 내보내기
export default usersSlice.reducer;