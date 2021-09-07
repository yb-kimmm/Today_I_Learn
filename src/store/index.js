import { combineReducers } from 'redux';

import todo from './modules/todo';

export default combineReducers({
  todo, // 서브 리듀서
});

// 루트 리듀서
