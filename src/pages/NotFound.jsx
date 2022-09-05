import React from "react";
import { useNavigate } from 'react-router-dom'
import Button from "../components/UI/Button";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  width: 100%;
  position: relative; 
`
const NotFoundLogo = styled.div`
  width: 230px;
  height: 260px;
  background-color: #8A9CF9;

  display: block;
  margin: 10% auto;
  
`
const NotFoundContent = styled.div`
  color: #6B23E0;
  font: bold;
  font-size: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`

function NotFound() {
  const navigate = useNavigate()

  return( 
    <NotFoundContainer>
      <NotFoundLogo></NotFoundLogo>
      <NotFoundContent>요청하신 페이지를 <br/> 찾을 수 없습니다</NotFoundContent>
      <Button onClick={() => navigate("/curation")}/>
    </NotFoundContainer>
  );
}

export default NotFound;
