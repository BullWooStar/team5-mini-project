import React, { useEffect, useRef, useState } from 'react'
// import { useSignUp, doSingUp } from '../../store/slices/user-slice';
import { useUsersContainer, doSingUp, doPost } from '../../store/slices/user-slice';
import {useCookies} from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import DropDown from '../../components/DropDown'
import { AiOutlineArrowLeft } from "react-icons/ai";
import * as S from './style'

function SignUpPage() {
  const [agedropdownVisibility, setAgeDropdownVisibility] = useState(false);
  const [jobdropdownVisibility, setJobDropdownVisibility] = useState(false);
  const [errorMessage, setErrorMessage] = useState({errorMessage: ""})
  const { dispatch, posts } = useUsersContainer()
  const navigate = useNavigate()
  const ageList = [20, 30, 40, 50, 60]
  const jobList = [
    {"STUDENT": "학생"},
    {"EMPLOYEE": "직장인"},
    {"UNIMPLOYED": "무직"},
    {"BUSINESS": "자영업자"}
  ]
  console.log(posts?.data === undefined)
  const [userInput, setUserInput] = useState({username:'', name: '', password:'', age:'', job:''})
  const pageName = useRef("users")
  const userAge = useRef('나이')
  const jobName = useRef('직업')
  
  useEffect(() => {
    // setCookie('access-token', posts?.authorization, {path:'/'})
    if (posts?.data === undefined) {} else {
      navigate('/login')
    }
    posts?.data.message && setErrorMessage({errorMessage: posts?.data.message})
  }, [posts?.data?.message, posts?.data])

  const inputChangeHandler = (e) => {
    const { name, value } = e.target
    setUserInput({...userInput, [name]:value})
    if (name === "age") {
      userAge.current = value
    }
  }

  const jobChangeHandler = (e) => {
    const { name, value } = e.target
    const { enName } = e.target.dataset
    setUserInput({...userInput, [name]:enName})
    jobName.current = value
  }

  const SingUp = () => {
    const userData = [userInput, pageName.current]
    dispatch(doPost(userData))
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
        name="username" />
      <S.Input
        placeholder={'이름'}
        onChange={inputChangeHandler}
        name="name" />
      <S.Input
        placeholder={'비밀번호'}
        onChange={inputChangeHandler}
        name="password"
        type="password" />
      <S.Input type={"button"} value={userAge.current} onClick={(e) => setAgeDropdownVisibility(!agedropdownVisibility)} />
      <DropDown visibility={agedropdownVisibility}>
          <S.Ul>
              {
                ageList.map((item, index) => {
                  return (
                    <S.Li key={index}>
                      <S.ListInput
                        type={"button"}
                        onClick={(e) => {
                          inputChangeHandler(e)
                            setAgeDropdownVisibility(!agedropdownVisibility)
                          }
                        }
                        name={"age"}
                        value={item} />
                    </S.Li>
                  )
                })
              }
          </S.Ul>
      </DropDown>
      <S.Input type={"button"} value={jobName.current} onClick={(e) => setJobDropdownVisibility(!jobdropdownVisibility)} />
      <DropDown visibility={jobdropdownVisibility}>
          <S.Ul>
              {
                jobList.map((item, index) => {
                  return (
                    <S.Li key={index}>
                      <S.ListInput
                        type={"button"}
                        onClick={(e) => {
                          jobChangeHandler(e,item)
                            setJobDropdownVisibility(!jobdropdownVisibility)
                          }
                        }
                        name={"job"}
                        data-en-name={Object.keys(item)}
                        value={Object.values(item)} />
                    </S.Li>
                  )
                })
              }
          </S.Ul>
      </DropDown>
      <p>{errorMessage.errorMessage}</p>
      <S.SignUpBtn onClick={SingUp}>회원가입</S.SignUpBtn>
    </S.Container>
  )
}

export default SignUpPage;