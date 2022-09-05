import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import GNB from "../UI/GNB";

function Header() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const isThereItem = cart.cartItems.length > 0;

  // 햄버거 토글
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleGnb = () => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  };

  return (
    <nav>
      <S.HeaderContainer>
        <S.HeaderWrap>
          <S.HeaderLogo onClick={() => navigate("/curation")}>
            NEEDMONEY
          </S.HeaderLogo>
          <S.HeaderUl>
            <S.HeaderLi onClick={() => navigate("/cart")}>
              <S.CartArea>
                {!isMenuOpen && <FiShoppingCart className="cart-icon" />}
                {isThereItem && (
                  <S.CartQuantityIcon>
                    {cart.cartItems.length}
                  </S.CartQuantityIcon>
                )}
              </S.CartArea>
            </S.HeaderLi>

            <S.HeaderLi onClick={() => toggleGnb()}></S.HeaderLi>
            <S.HeaderLi>
              {isMenuOpen ? (
                <S.CloseMenuBtn>
                  <CgClose size={28} onClick={() => toggleGnb()} />
                </S.CloseMenuBtn>
              ) : (
                <S.HambugerMenu>
                  <GiHamburgerMenu onClick={() => toggleGnb()} />
                </S.HambugerMenu>
              )}
            </S.HeaderLi>
          </S.HeaderUl>
        </S.HeaderWrap>
      </S.HeaderContainer>

      {isMenuOpen && <GNB toggleGnb={toggleGnb} />}
    </nav>
  );
}

export default Header;
