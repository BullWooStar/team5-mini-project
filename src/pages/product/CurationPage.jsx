import React from "react";
import NavBar from "../../components/NavBar";
import Card from "../../components/UI/Card";
import { DUMMY_DATA } from "../../utils/constants";
import styled from "styled-components";

const TitleArea = styled.div`
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 20rem;
`;
const UserName = styled.span`
  color: ${(props) => props.theme.palette.purple};
`;

const CardContainer = styled.div`
  ${(props) => props.theme.common.flexCenter}
  position: relative;
  margin: 2.4rem auto;
  flex-direction: column;
  width: 20rem;
  height: 8rem;
  color: #fff;
  background-color: ${(props) => props.theme.palette.purple};
  border-radius: 16px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
const CardAmountText = styled.p`
  font-size: ${(props) => props.theme.CardFontSizes.paragraph};
  margin: 0;
  font-weight: 600;
`;
const CardInfoText = styled.p`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 0.8rem;
  margin: 1rem;
`;

let totalAmount = [...DUMMY_DATA].reduce((acc, cur) => {
  return acc + cur.amount;
}, 0);

function CurationPage() {
  return (
    <>
      <TitleArea>
        <h2>
          <UserName>{"user.name"}</UserName>님 반갑습니다.
        </h2>
      </TitleArea>
      <CardContainer>
        <CardInfoText>신청가능한 대출 상품 종합</CardInfoText>
        <CardAmountText>{`${totalAmount.toLocaleString(
          "ko-KR"
        )} 원`}</CardAmountText>
      </CardContainer>

      <div>
        <TitleArea>
          <h3>맞춤상품</h3>
        </TitleArea>
        {DUMMY_DATA.map((item) => (
          <Card key={item.id} product={item} />
        ))}
      </div>
    </>
  );
}

export default CurationPage;
