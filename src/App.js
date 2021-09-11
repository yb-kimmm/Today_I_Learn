import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PinkButton } from './components/PinkButton';
import {} from './store/modules/score';
import styled from 'styled-components';

const Header = styled.h1``;

function App() {
  const page = useSelector(state => state.score.page);
  const dispatch = useDispatch();

  return (
    <>
      {page === 0 && (
        <main>
          <img />
          <h1>나라별 수도 퀴즈</h1>
          <h2>진정한 수도 고인물도 100점을 맞기 어렵습니다.</h2>
          <PinkButton
            text="테스트 시작!"
            clickEvent={() => {
              dispatch(next());
            }}
          />
        </main>
      )}
    </>
  );
}

export default App;
