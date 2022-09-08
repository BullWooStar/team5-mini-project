import React from 'react';
import styled from "styled-components";

const DropdownContainer = styled.article`
  position: relative;
`;

const Dropdown = (props) => {
  return (
    <DropdownContainer>
      { props.visibility && props.children }
    </DropdownContainer>
  )
};

export default Dropdown;