import React from 'react'
import * as S from "./style";

function Loading() {
  return (
    <>
      <S.LoadingConatainer>
        <S.LoadingWrapper>
          <S.LoadingSpin />
        </S.LoadingWrapper>
      </S.LoadingConatainer>
    </>
  )
}

export default Loading