import React, { useEffect } from "react";
import Card from "../../components/UI/Card";
import Loading from "../../components/UI/Loading";
import { asynPromotionFetch, getPromotionData } from "../../store/slices/promotion-product-slice";
import { useDispatch, useSelector } from "react-redux";

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
      <h2>프로모션</h2>

    <div>
      {products.map((item) => (
        <Card key={item.id} product={item} />
      ))}
    </div>
    </>
    )
}

export default PromotionPage;
