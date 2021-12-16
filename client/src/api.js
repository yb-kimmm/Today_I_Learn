import axios from "axios";

/*
    axios 인스턴스를 생성합니다.
    생성할때 사용하는 옵션들 (baseURL, timeout, headers 등)은 다음 URL에서 확인할 수 있습니다.
    https://github.com/axios/axios 의 Request Config 챕터 확인
*/
const instance = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 1000,
  // 해커 뉴스 API는 커스텀 헤더 넣으면 CORS걸려서 주석처리했습니다.
  // headers: {'X-Custom-Header': 'foobar'}
});

/*
    1. 요청 인터셉터를 작성합니다.
    2개의 콜백 함수를 받습니다.

    1) 요청 바로 직전 - 인자값: axios config
    2) 요청 에러 - 인자값: error
*/
instance.interceptors.request.use(
  function(config) {
    if (process.browser) {
      const token = localStorage.getItem("token");
      config.headers["Content-Type"] = "application/json; charset=utf-8";
      config.headers["Authorization"] = `Bearer ${token}`;
      return config;
    }
  },
  function(error) {
    // 요청 에러 처리를 작성합니다.
    console.log(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function(response) {
    /*
      http status가 200인 경우
      응답 바로 직전에 대해 작성합니다. 
      .then() 으로 이어집니다.
  */
    return response.data;
  },

  function(error) {
    /*
      http status가 200이 아닌 경우
      응답 에러 처리를 작성합니다.
      .catch() 으로 이어집니다.    
  */
    console.log(error);
    return Promise.reject(error);
  }
);

// 생성한 인스턴스를 익스포트 합니다.
export default instance;

// export const api = function() {
//   // Create a custom axios instance

//     // Set baseURL to something different
//     api.setBaseURL(
//       // process.env.NODE_ENV === "production"
//       //   ? "http://fastcampusblindclone-env.eba-p687fdja.us-east-1.elasticbeanstalk.com/"
//       //   : "http://localhost:8080"
//       "http://localhost:8080"
//     );
//   }
// };
