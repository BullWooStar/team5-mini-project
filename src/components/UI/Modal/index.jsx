import React from "react";
import { useRef } from "react";
import * as S from "./style";
import { BsCheck2Circle } from "react-icons/bs";

function Modal({ showModal, setShowModal, title }) {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  return (
    <>
      {showModal ? (
        <S.Background onClick={closeModal} ref={modalRef}>
          <S.ModalWrapper showModal={showModal}>
            <S.ModalContent>
              <BsCheck2Circle size="4rem" color="6B23E0" />
              <S.ModalTilte>{title}</S.ModalTilte>
            </S.ModalContent>
            <S.CloseModalButton onClick={() => setShowModal((prev) => !prev)} />
          </S.ModalWrapper>
        </S.Background>
      ) : null}
    </>
  );
}

export default Modal;
