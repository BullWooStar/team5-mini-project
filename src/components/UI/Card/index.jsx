import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/slices/cart-slice";
import * as S from "./style";
import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";
import { useLocation } from "react-router";
import { CART_URL } from "../../../utils/constants";

function Card({ product, onRemove }) {
  const dispatch = useDispatch();
  const location = useLocation().pathname;

  const amount = product.amount
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const repayPeriod = product.repayPeriod
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const cartItemAddHandler = () => {
    dispatch(addToCart({ ...product }));
  };

  return (
    <S.CardContainer>
      {location !== CART_URL ? (
        <S.CardCartBtn onClick={cartItemAddHandler}>
          <IoMdAddCircle size="1.2rem" color="#6B23E0" />
        </S.CardCartBtn>
      ) : (
        <S.CardCartBtn onClick={onRemove}>
          <IoMdRemoveCircle size="1.2rem" color="#6B23E0" />
        </S.CardCartBtn>
      )}
      <S.CardAgencyText>{product.agency}</S.CardAgencyText>
      <S.CardMainWrapper>
        <S.CardMainTitle>{product.name}</S.CardMainTitle>
        <S.CardAmountText>{`${amount} 원`}</S.CardAmountText>
        <S.CardInfoWrapper>
          <S.CardInfoText>{`연 ${product.interestRate}%`}</S.CardInfoText>
          <S.CardInfoText>{`상환기간 ${repayPeriod}일`}</S.CardInfoText>
        </S.CardInfoWrapper>
      </S.CardMainWrapper>
    </S.CardContainer>
  );
}

export default Card;
