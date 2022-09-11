import React, { useEffect } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function GNB(props) {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies();

  useEffect(() => {
    if (
      cookies["access-token"] === "undefined" ||
      cookies["access-token"] === undefined
    ) {
    } else {
      navigate("/curation");
    }
  }, [cookies["access-token"]]);

  const signOut = () => {
    removeCookie("access-token", { path: "/" });
    navigate(0);
  };

  return (
    <S.GnbContainer>
      <S.EditWrap>
        <p
          onClick={() => {
            navigate("/useredit");
            props.toggleGnb();
          }}
        >
          회원정보수정
        </p>
      </S.EditWrap>
      <S.LogoutWrapper>
        <S.LogoutBtn onClick={signOut}>로그아웃</S.LogoutBtn>
      </S.LogoutWrapper>
    </S.GnbContainer>
  );
}

export default GNB;
