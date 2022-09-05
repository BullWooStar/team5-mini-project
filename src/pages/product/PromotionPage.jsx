import React, { useEffect } from "react";
import Card from "../../components/UI/Card";
import Loading from "../../components/UI/Loading";
import styled from "styled-components";
import { asynPromotionFetch, getPromotionData } from "../../store/slices/promotion-product-slice";
import { useDispatch, useSelector } from "react-redux";

const TitleArea = styled.div`
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 20rem;
`;

function PromotionPage() {
  const dispatch = useDispatch()
  const { products, loading } = useSelector(getPromotionData) 
  useEffect(() => {
    dispatch(asynPromotionFetch())
  }, [])

  if(loading) {
    return (
    <>
      <Loading />
    </>
    )
  } 
  return  (
    <>
    <TitleArea>
      <h2>
        프로모션
      </h2>
    </TitleArea>

    <div>
      {products.map((item) => (
        <Card key={item.id} product={item} />
      ))}
    </div>
    </>
    )
}

export default PromotionPage;
