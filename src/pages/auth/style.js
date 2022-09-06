import styled from 'styled-components'
import theme from '../../styles/theme'

const mainColor = theme.palette.purple;

export const Container = styled.div`
  width: 350px;
  height: 100vh;
  padding: 0 20px;
  margin: 0 auto 0;
`

export const H2 = styled.h2`
  font-size: 2rem;
  padding: 32px 0 63px;
  margin: 0;
`

export const Input = styled.input`
  background-color: #fff;
  color: #474747;
  text-align: left;
  width: 100%;
  height: 52px;
  font-size: 1.25rem;
  text-indent: 19px;
  border-radius: 8px;
  border: 1px solid #ECECEC;
  box-sizing: border-box;
  margin-bottom: 20px;
  ::placeholder{
    color: #474747;
  }  &:focus {
    outline: none;
    border: 2px solid ${mainColor};
  }
`

export const Select = styled.select`
  width: 100%;
  height: 52px;
  font-size: 1.25rem;
  text-indent: 19px;
  border-radius: 8px;
  border: 1px solid #ECECEC;
  box-sizing: border-box;
  margin-bottom: 20px;
  -moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;
  &:focus {
    outline: none;
    border: 2px solid ${mainColor};
  }
`

export const Ul = styled.ul`
  width: 100%;
  border: 1px solid #ECECEC;
  overflow: hidden;
  border-radius: 8px;
  box-sizing: border-box;
  margin-top: -8px;
  padding: 0;
`
export const Li = styled.li`
  list-style: none;
  color: #474747;
  background-color: #fff;
  height: 52px;
  font-size: 1.25rem;
`

export const ListInput = styled.input`
  background-color: #fff;
  color: #474747;
  text-align: left;
  width: 100%;
  height: 52px;
  font-size: 1.25rem;
  text-indent: 19px;
  border: none;
  box-sizing: border-box;
  margin-bottom: 20px;
  &:focus {
    outline: none;
    border: 2px solid ${mainColor};
  }
`

export const SignUpBtn = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 86px;
  background: ${mainColor};
  border-radius: 10px 10px 0px 0px;
  color: #fff;
  font-size: 2rem;
`

export const BackBtn = styled.div`
  padding-top: 20px;
`