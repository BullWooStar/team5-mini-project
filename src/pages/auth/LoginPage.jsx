import React, { useEffect, useState } from 'react'
import { useSignUp, doSingUp, doLogIn } from '../../store/slices/user-slice';
import {useCookies} from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from "react-icons/ai";
import * as S from './style'

function LoginPage() {
  const { dispatch, posts } = useSignUp()
  const [cookies, setCookie, removeCookie] = useCookies()
  const navigate = useNavigate()
  
  useEffect(() => {
    setCookie('access-token', posts?.accessToken, {path:'/'})
  }, [posts])

  useEffect(() => {
    if (cookies["access-token"] === 'undefined') {} else {
      navigate('/')
    }
  }, [cookies["access-token"]])

  const [userInput, setUserInput] = useState({email:'', password:''})
  const inputChangeHandler = (e) => {
    const { name, value } = e.target
    setUserInput({...userInput, [name]:value})
  }

  const LogIn = () => {
    dispatch(doLogIn(userInput))
  }

  return (
    <S.Container>
      <S.BackBtn onClick={() => navigate(-1)}>
        <AiOutlineArrowLeft style={{fontSize: "2rem"}} />
      </S.BackBtn>
      <S.H2>로그인</S.H2>
      <S.Input
        placeholder={'아이디'}
        onChange={inputChangeHandler}
        name="email" />
      <S.Input
        placeholder={'비밀번호'}
        onChange={inputChangeHandler}
        name="password"
        type="password" />
      <S.SignUpBtn onClick={LogIn}>로그인</S.SignUpBtn>
    </S.Container>
  )
}

export default LoginPage;
