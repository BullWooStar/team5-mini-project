import React, { useEffect } from "react";
import Card from "../../components/UI/Card";
import Loading from "../../components/UI/Loading";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { asynCurationFetch, asynUserFetch, getCurationData } from "../../store/slices/curation-product-slice";
import { useCookies } from "react-cookie";

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
  font-size: 1.8rem;
  margin: 2rem 2rem 0 auto;
  font-weight: 500;
  & span {
    font-size: 1rem;
  }
`;
const CardInfoText = styled.p`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1rem;
  margin: 1.4rem;
`;



function CurationPage() {
  const dispatch = useDispatch()
  const { user, products, loading } = useSelector(getCurationData)
  const [cookies] = useCookies()
  const cookieValue = Object.values(cookies)

  useEffect(() => {
    dispatch(asynUserFetch(cookieValue[0]))
    dispatch(asynCurationFetch(cookieValue[0]))
  }, [])

  let totalAmount = [...products].reduce((acc, cur) => {
    return acc + cur.amount;
  }, 0);

  if(loading) {
    return (
    <>
      <Loading />
    </>
    )
  } 
  return (
    <>
        <h2>
          <UserName>{user.name}</UserName>님 반갑습니다.
        </h2>
      <CardContainer>
        <CardInfoText>신청가능한 대출 상품 종합</CardInfoText>
        <CardAmountText>
          {totalAmount.toLocaleString("ko-KR")} 
          <span> 원</span>
        </CardAmountText>
      </CardContainer>

      <div>
          <h3>맞춤상품</h3>
        {products.map((item) => (
          <Card key={item.id} product={item} />
        ))}
      </div>
    </>
  );
}

export default CurationPage;
