import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Card from "../../components/UI/Card";
import Modal from "../../components/UI/Modal";
import Button from "../../components/UI/Button";
import { removeFromCart, clearCart } from "../../store/slices/cart-slice";

const Container = styled.div`
  ${(props) => props.theme.common.flexCenter}
`;

const TitleArea = styled.div`
  margin: 0 auto;
  width: 20rem;
`;

const BtnArea = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 20rem;
`;

const ClearAllBtn = styled.button`
  border: none;
  border-radius: 1rem;
  font-size: 0.8rem;
  padding: 0.25rem 0.6rem;
  margin: 0.2rem;
  color: #fff;
  outline: none;
  cursor: pointer;
  background: #b9b9b9;
`;

const EmptyCart = styled.div`
  ${(props) => props.theme.common.flexColumnStart}
  vertical-align: center;
  margin-top: 10rem;
  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
`;

const CartItemList = styled.div`
  margin-bottom: 4rem;
`;

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const doNotHaveItems = cart.cartItems.length === 0;

  const cartItemRemoveHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  const openModal = () => {
    setShowModal((prev) => !prev);
    dispatch(clearCart());
  };

  return (
    <>
      <TitleArea>
        <h2>장바구니</h2>
      </TitleArea>
      <Container>
        {doNotHaveItems ? (
          <EmptyCart>
            <p>담은 대출 상품이 없습니다.</p>
            <Button smallWidth onClick={() => navigate("/allproduct")}>
              대출 상품 보러가기
            </Button>
          </EmptyCart>
        ) : (
          <div>
            <h3>담은 대출 상품 목록</h3>
            <BtnArea>
              <ClearAllBtn onClick={clearCartHandler}>전체 삭제</ClearAllBtn>
            </BtnArea>
            <CartItemList>
              {cart.cartItems &&
                cart.cartItems.map((item) => (
                  <div key={item.id}>
                    <Card
                      product={item}
                      onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    />
                  </div>
                ))}
            <Button middleWidth onClick={openModal}>
              신청하기
            </Button>
            </CartItemList>
          </div>
        )}
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          title="대출 상품이 신청되었습니다."
        />
      </Container>
    </>
  );
}

export default Cart;
