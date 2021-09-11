// 퀴즈를 풀면 정답 -> 점수 획득
// 오답 -> 점수 획득 X

// 상태 : 사용자의 최종 점수(score)
// 액션 : 정답인지 아닌지 판별 , 정답 점수++;

// 상태 : 사용자가 응답한 정답 목록 , [0 , 2, 1]
// 액션 : 정답 목록에 하나하나 추가

// 액션 타입 ( 문자열 )
const CHECK_CORRECT = 'score/CHECK_CORRECT';
const NEXT_PAGE = 'score/NEXTPAGE';
const RESET = 'score/RESET';

// 액션 생성 함수
export function check({ quizIndex, answerIndex }) {
  return {
    type: CHECK_CORRECT,
    payload: { quizIndex, answerIndex },
  };
}

export function next() {
  return { type: NEXT_PAGE };
}

export function reset() {
  return {
    type: RESET,
  };
}

// 초기 상태
const initialState = {
  score: 0,
  page: 0, // 0: dㅣㄴ트로 페이지 , 1~ quize.length : 퀴즈 페이지 , quize.length+1: 마지막 페이지
  quizs: [
    {
      q: '대한민국의 수도는?',
      a: [
        {
          test: '서울',
          isCorrect: true,
        },
        {
          test: '인천',
          isCorrect: false,
        },
        {
          test: '부선',
          isCorrect: false,
        },
      ],
    },
  ],
};
// 리듀서
export default function score(state = initialState, action) {
  switch (action.type) {
    case CHECK_CORRECT:
      return {
        ...state,
        score: state.quizs[action.payload.quizIndex].isCorrect
          ? score + 10
          : score,
      };
    case NEXT_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };
    case RESET:
      return {
        ...state,
        score: 0,
        page: 0,
      };
    default:
      return state;
  }
}
