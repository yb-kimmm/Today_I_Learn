import * as postsAPI from "../api/posts"; // api/posts 안의 함수 모두 불러오기
import {
  // createPromiseThunk,
  reducerUtils,
  handleAsyncActions,
  // createPromiseThunkById,,
  createPromiseSaga,
  createPromiseSagaById,
  handleAsyncActionsById,
} from "../lib/asyncUtils";

// import { call, put, takeEvery } from "redux-saga/effects";
import { takeEvery, getContext, select } from "redux-saga/effects";

/* 액션 타입 */

// 포스트 여러개 조회하기
const GET_POSTS = "GET_POSTS"; // 요청 시작
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS"; // 요청 성공
const GET_POSTS_ERROR = "GET_POSTS_ERROR"; // 요청 실패

// 포스트 하나 조회하기
const GET_POST = "GET_POST";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_ERROR = "GET_POST_ERROR";
const GO_TO_HOME = "GO_TO_HOME";

const CLEAR_POST = "CLEAR_POST";
const PRINT_STATE = "PRINT_STATE";

// export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts, true);
// export const getPost = createPromiseThunkById(GET_POST, postsAPI.getPostById);

export const getPosts = () => ({ type: GET_POSTS });
export const getPost = (id) => ({
  type: GET_POST,
  payload: id,
  meta: id,
});
export const printState = () => ({ type: PRINT_STATE });

const getPostsSaga = createPromiseSaga(GET_POSTS, postsAPI.getPosts);
const getPostSaga = createPromiseSagaById(GET_POST, postsAPI.getPostById);

// function* getPostsSaga() {
//   try {
//     const posts = yield call(postsAPI.getPosts);
//     yield put({
//       type: GET_POSTS_SUCCESS,
//       payload: posts,
//     });
//   } catch (error) {
//     yield put({
//       type: GET_POSTS_ERROR,
//       payload: error,
//       error: true,
//     });
//   }
// }

// function* getPostSaga(action) {
//   const id = action.payload;

//   try {
//     const post = yield call(postsAPI.getPostById, id);
//     yield put({
//       type: GET_POST_SUCCESS,
//       payload: post,
//       meta: id,
//     });
//   } catch (e) {
//     yield put({
//       type: GET_POST_ERROR,
//       payload: e,
//       error: true,
//       meta: id,
//     });
//   }
// }

function* goToHomeSaga() {
  const history = yield getContext("history");
  history.push("/");
}

function* printStateSaga() {
  const state = yield select((state) => state.posts);
  console.log(state);
}

export function* postsSaga() {
  yield takeEvery(GET_POSTS, getPostsSaga);
  yield takeEvery(GET_POST, getPostSaga);
  yield takeEvery(GO_TO_HOME, goToHomeSaga);
  yield takeEvery(PRINT_STATE, printStateSaga);
}

export const clearPost = () => ({ type: CLEAR_POST });
// initialState 쪽도 반복되는 코드를 initial() 함수를 사용해서 리팩토링 했습니다.
const initialState = {
  posts: reducerUtils.initial(),
  post: {},
};

const getPostsReducer = handleAsyncActions(GET_POSTS, "posts", true);
const getPostReducer = handleAsyncActionsById(GET_POST, "post", true);

export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      return getPostsReducer(state, action);
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      return getPostReducer(state, action);
    case CLEAR_POST:
      return {
        ...state,
        post: reducerUtils.initial,
      };
    default:
      return state;
  }
}
