import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/UI/Button";
import styled from "styled-components";

const HomepageContainer = styled.div`
  width: 100%;
  ${(props) => props.theme.common.flexColumnStart}
  margin: 0 auto;
`;
const HomepageLogo = styled.div`
  margin-top: 10rem;
  ${(props) => props.theme.common.flexColumnStart}
  img {
    width: 80px;
    height: 80px;
    margin-bottom: 2rem;
  }
  span {
    color: ${(props) => props.theme.palette.purple};
    font-size: 2rem;
    font-weight: 900;
    font-family: "Roboto", sans-serif;
  }
`;
const HomepageButton = styled.div`
  margin-top: 7rem;
`;

const LoginButton = styled.div`
  margin-bottom: 0.5rem;
`;
const SignUpButton = styled.div`
  button {
    color: ${(props) => props.theme.palette.purple};
  }
`;

function HomePage() {
  const navigate = useNavigate();

  return (
    <HomepageContainer>
      <HomepageLogo>
        <img src="/images/home_logo.png" alt="Logo" />
        <span>NEEDMONEY</span>
      </HomepageLogo>
      <HomepageButton>
        <LoginButton>
          <Button middleWidth onClick={() => navigate("/login")}>
            로그인
          </Button>
        </LoginButton>
        <SignUpButton>
          <Button white onClick={() => navigate("/signup")}>
            회원가입
          </Button>
        </SignUpButton>
      </HomepageButton>
    </HomepageContainer>
  );
}

export default HomePage;
