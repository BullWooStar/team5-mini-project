import styled from "styled-components";

export const GnbContainer = styled.div`
  width: 100%;
  height: 844px;
`;
export const EditWrap = styled.div`
  margin-top: 20px;
  padding: 10px 0 10px 20px;
  border-width: 1px 0 1px 0;
  border-style: solid;
  text-align: left;
  border-color: #ccc;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.palette.purple};
    background-color: #e8e8e8;
  }
`;
export const LogoutWrapper = styled.div`
  text-align: center;
`;

export const LogoutBtn = styled.button`
  border: 0;
  margin-top: 3rem;
  font-size: 1rem;
  cursor: pointer;
  color: #777;
`;
