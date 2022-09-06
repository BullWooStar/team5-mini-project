import React, { useState, useEffect } from "react";
import {GiWallet, GiShoppingBag} from "react-icons/gi";
import {BsCreditCardFill} from "react-icons/bs";
import * as S from './style';
import { useNavigate, NavLink, Route, useLocation} from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation().pathname;

    return(
    <S.NavContainer>
    <div>
      {location === "/curation" 
      ? ( 
      <S.NavButton onClick={ () => navigate("/curation")} color="#6B23E0"> 
        <S.NavIcon color="#6B23E0"><GiWallet size={45} /></S.NavIcon>
        맞춤추천  
      </S.NavButton> ) 
      : (
        <S.NavButton onClick={ () => navigate("/curation") }> 
          <S.NavIcon><GiWallet size={45} /></S.NavIcon>
          맞춤추천
        </S.NavButton>)
      }
    </div>
    <div>
      {location === "/allproduct" 
      ? (
      <S.NavButton onClick={() => navigate("/allproduct")} color="#6B23E0">
        <S.NavIcon color="#6B23E0"><GiShoppingBag size={45}/></S.NavIcon>
        전체상품
      </S.NavButton> )
      :(
        <S.NavButton onClick={() => navigate("/allproduct")}>
          <S.NavIcon><GiShoppingBag size={45}/></S.NavIcon>
          전체상품
        </S.NavButton> 
      ) }
    </div>
    <div>
    {location === "/promotion" 
    ? ( 
      <S.NavButton onClick={() => navigate("/promotion")} color="#6B23E0">
        <S.NavIcon color="#6B23E0"><BsCreditCardFill size={45}/></S.NavIcon>
        프로모션
      </S.NavButton> )
      :(
        <S.NavButton onClick={() => navigate("/promotion")}>
        <S.NavIcon><BsCreditCardFill size={45}/></S.NavIcon>
        프로모션
      </S.NavButton>  
      ) }
    </div>
   </S.NavContainer>
);
}

export default NavBar;
