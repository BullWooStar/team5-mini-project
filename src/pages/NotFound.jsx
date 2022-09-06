import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/UI/Button";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const NotFoundLogo = styled.div`
  width: 230px;
  height: 230px;
  margin-top: 70px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const NotFoundContent = styled.div`
  font: bold;
  font-size: 20px;
  margin-top: 40px;
`;

function NotFound() {
  const navigate = useNavigate();

  return (
    <NotFoundContainer>
      <NotFoundLogo>
        <img src="./images/404.png" alt="404" />
      </NotFoundLogo>
      <NotFoundContent>
        요청하신 페이지를 <br /> 찾을 수 없습니다
      </NotFoundContent>
      <Button
        style={{ marginTop: "30px" }}
        middleWidth
        onClick={() => navigate("/curation")}
      >
        돌아가기
      </Button>
    </NotFoundContainer>
  );
}

export default NotFound;
