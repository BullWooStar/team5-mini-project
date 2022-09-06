import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  margin: 0 auto;
  position: relative;
`;

export const HeaderWrap = styled.div`
  display: flex;
  font-size: 25px;
`;
export const HeaderLogo = styled.div`
  color: ${(props) => props.theme.palette.purple};
  cursor: pointer;
  margin-left: 0.5rem;
  padding: 1rem;
  font-weight: 900;
  font-family: "Roboto", sans-serif;
`;
export const HeaderUl = styled.div`
  color: #000;
  display: flex;
  list-style: none;
  position: absolute;
  right: 0px;
  margin: 5px;
  padding: 5px;
  cursor: pointer;
  align-items: center;
`;
export const HeaderLi = styled.div`
  margin-right: 0.5rem;
`;

export const HambugerMenu = styled.div`
  margin-top: 0.4rem;
`;

export const CloseMenuBtn = styled.div`
  margin-top: 0.4rem;
`;

export const CartArea = styled.div`
  position: relative;
  display: flex;
`;

export const CartQuantityIcon = styled.div`
  ${(props) => props.theme.common.flexCenter}
  font-size: 0.7rem;
  font-weight: 700;
  height: 18px;
  width: 18px;
  background-color: ${(props) => props.theme.palette.purple};
  border-radius: 50%;
  color: #fff;
  position: absolute;
  top: -8px;
  right: -10px;
`;
