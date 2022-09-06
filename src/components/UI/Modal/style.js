import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const Background = styled.div`
  ${(props) => props.theme.common.flexCenter}
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: block;
`;

export const ModalWrapper = styled.div`
  width: 300px;
  height: 300px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  border-radius: 10px;
  margin-top: 8rem;
  z-index: 10;
`;

export const ModalContent = styled.div`
  ${(props) => props.theme.common.flexColumnStart}
  line-height: 1.8;
  color: #141414;
  margin-top: 5rem;
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

export const ModalTilte = styled.p`
  font-size: 1.2rem;
  margin-top: 2rem;
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  color: #777;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 28px;
  height: 28px;
  padding: 0;
  z-index: 10;
`;
