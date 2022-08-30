import React, { useEffect, useState } from 'react'
import { useSignUp, doSingUp } from '../../store/slices/user-slice';
import {useCookies} from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import Dropdown from '../../components/Dropdown'
import { AiOutlineArrowLeft } from "react-icons/ai";
import * as S from './style'

function SignUpPage() {
  const [AgedropdownVisibility, setAgeDropdownVisibility] = React.useState(false);
  const [JobdropdownVisibility, setJobDropdownVisibility] = React.useState(false);
  const { dispatch, posts } = useSignUp()
  const [cookies, setCookie, removeCookie] = useCookies()
  const navigate = useNavigate()

  const AgeList = [20, 30, 40, 50, 60]
  const JobList = ["학생", "직장인", "무직", "자영업자"]
  
  useEffect(() => {
    setCookie('access-token', posts?.accessToken, {path:'/'})
  }, [posts])

  useEffect(() => {
    if (cookies["access-token"] === 'undefined') {} else {
      navigate('/login')
    }
  }, [cookies["access-token"]])

  const [userInput, setUserInput] = useState({id:'', password:'', age:'나이', job:'직업'})

  const inputChangeHandler = (e) => {
    const { name, value } = e.target
    setUserInput({...userInput, [name]:value})
  }

  const SingUp = () => {
    dispatch(doSingUp(userInput))
  }

  return (
    <S.Container>
      <S.BackBtn onClick={() => navigate(-1)}>
        <AiOutlineArrowLeft style={{fontSize: "2rem"}} />
      </S.BackBtn>
      <S.H2>회원가입</S.H2>
      <S.Input
        placeholder={'아이디'}
        onChange={inputChangeHandler}
        name="email" />
      <S.Input
        placeholder={'비밀번호'}
        onChange={inputChangeHandler}
        name="password"
        type="password" />
      <S.Input type={"button"} value={userInput.age} onClick={(e) => setAgeDropdownVisibility(!AgedropdownVisibility)} />
      <Dropdown visibility={AgedropdownVisibility}>
          <S.Ul>
              {
                AgeList.map((item, index) => {
                  return (
                    <S.Li key={index}>
                      <S.ListInput
                        type={"button"}
                        onClick={(e) => {
                            inputChangeHandler(e)
                            setAgeDropdownVisibility(!AgedropdownVisibility)
                          }
                        }
                        name={"age"}
                        value={item} />
                    </S.Li>
                  )
                })
              }
          </S.Ul>
      </Dropdown>
      <S.Input type={"button"} value={userInput.job} onClick={(e) => setJobDropdownVisibility(!JobdropdownVisibility)} />
      <Dropdown visibility={JobdropdownVisibility}>
          <S.Ul>
              {
                JobList.map((item, index) => {
                  return (
                    <S.Li key={index}>
                      <S.ListInput
                        type={"button"}
                        onClick={(e) => {
                            inputChangeHandler(e)
                            setJobDropdownVisibility(!JobdropdownVisibility)
                          }
                        }
                        name={"job"}
                        value={item} />
                    </S.Li>
                  )
                })
              }
          </S.Ul>
      </Dropdown>
      <S.SignUpBtn onClick={SingUp}>회원가입</S.SignUpBtn>
    </S.Container>
  )
}

export default SignUpPage;