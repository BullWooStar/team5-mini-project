import React from "react";
import styled, { css } from "styled-components";
import theme from "../../../styles/theme";

const mainColor = theme.palette.purple;

// 메인컬러 버튼
const StyledButton = styled.button`
  border: none;
  border-radius: 1rem;
  font-size: 0.8rem;
  padding: 0.25rem 0.6rem;
  margin: 0.2rem;
  color: #fff;
  outline: none;
  cursor: pointer;
  background: ${mainColor};

  // 가로 100% 버튼
  ${(props) =>
    props.fullWidth &&
    css`
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 86px;
      border-radius: 10px 10px 0px 0px;
      color: #fff;
      font-size: 1.6rem;
      z-index: 20;
    `}

  // 중간 크기 버튼
    ${(props) =>
    props.middleWidth &&
    css`
      bottom: 20px;
      width: 300px;
      height: 56px;
      border-radius: 3rem;
      font-size: 1.2rem;
      z-index: 20;
      box-shadow: rgb(79 99 210 / 15%);
    `}

    ${(props) =>
    props.white &&
    css`
      background: #fff;
      bottom: 20px;
      width: 300px;
      height: 56px;
      border-radius: 3rem;
      font-size: 1.2rem;
      z-index: 20;
      box-shadow: rgb(79 99 210 / 15%);
    `}

    // 작은 크기 버튼
    ${(props) =>
    props.smallWidth &&
    css`
      min-width: 100px;
      padding: 12px 24px;
      border-radius: 3rem;
      border: none;
      color: #fff;
      font-size: 0.9rem;
    `}
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
