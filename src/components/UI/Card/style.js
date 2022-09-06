import styled from "styled-components";

export const CardContainer = styled.div`
  ${(props) => props.theme.common.flexCenter}
  position: relative;
  margin: 1rem auto;
  flex-direction: column;
  width: 20rem;
  height: 10rem;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  box-sizing: border-box;
`;

export const CardMainWrapper = styled.div`
  margin: 1.6rem auto 0 auto;
`;

export const CardMainTitle = styled.p`
  font-size: ${(props) => props.theme.CardFontSizes.title};
  font-weight: 500;
  word-break: keep-all;
  text-align: center;
  width: 14rem;
  flex-wrap: wrap;
  margin: 0 auto;
`;
export const CardAmountText = styled.p`
  font-size: ${(props) => props.theme.CardFontSizes.paragraph};
  text-align: center;
  margin: 0.3rem auto;
`;
export const CardAgencyText = styled.p`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 0.8rem;
  margin: 1rem;
`;

export const CardInfoWrapper = styled.div`
  width: 10rem;
  display: flex;
  justify-content: space-around;
  margin: 0.6rem auto;
  color: #777;
`;

export const CardInfoText = styled.p`
  display: flex;
  font-size: 0.8rem;
  margin: 0;
`;

export const CardCartBtn = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 1rem;
  &:hover {
    scale: 1.1;
  }
`;
