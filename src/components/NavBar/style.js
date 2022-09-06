import styled from 'styled-components'

export const NavContainer = styled.div`
    width: 100%;
    height: 104px;
    background-color: #FFF;
    display: inline-flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 20px 20px 0 0;
    position: fixed;
    bottom: 0;

`
export const NavButton = styled.button`
    font-size: small;
    cursor: pointer;
    align-items: stretch;
    flex-direction: column;
    display: flex;
    outline-color: 0;
    border: 0;
    background-color: #fff;
    color: ${props => props.color};
    &:hover {
        color: #6B23E0;
    }

`
export const NavIcon = styled.div`
    margin: auto;
    color: ${props => props.color};
    &:hover {
        color: #6B23E0;
    }

`

