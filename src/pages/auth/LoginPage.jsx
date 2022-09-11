import React, { useEffect, useRef, useState } from "react";
import {
  useUsersContainer,
  doSingUp,
  doPost,
} from "../../store/slices/user-slice";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import * as S from "./style";

function LoginPage() {
  const { dispatch, posts, error } = useUsersContainer();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [userInput, setUserInput] = useState({ email: "", password: "" });
  let pageName = useRef("login");
  const [errorMessage, setErrorMessage] = useState({ errorMessage: "" });
  const navigate = useNavigate();

  useEffect(() => {
    setCookie("access-token", posts?.authorization, { path: "/" });
  }, [posts?.data]);

  useEffect(() => {
    console.log(cookies);
    if (
      cookies["access-token"] === "undefined" ||
      cookies["access-token"] === undefined
    ) {
    } else {
      navigate("/curation");
    }
  }, [cookies["access-token"]]);

  useEffect(() => {
    posts?.data.message &&
      setErrorMessage({ errorMessage: posts?.data.message });
  }, [posts?.data.message]);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const LogIn = () => {
    const userData = [userInput, pageName.current];
    dispatch(doPost(userData));
  };

  return (
    <S.Container>
      <S.BackBtn onClick={() => navigate(-1)}>
        <AiOutlineArrowLeft style={{ fontSize: "2rem" }} />
      </S.BackBtn>
      <S.H2>로그인</S.H2>
      <S.Input
        placeholder={"아이디"}
        onChange={inputChangeHandler}
        name="username"
      />
      <S.Input
        placeholder={"비밀번호"}
        onChange={inputChangeHandler}
        name="password"
        type="password"
      />
      <S.SignUpBtn onClick={LogIn}>로그인</S.SignUpBtn>
      <p>{errorMessage.errorMessage}</p>
    </S.Container>
  );
}

export default LoginPage;
