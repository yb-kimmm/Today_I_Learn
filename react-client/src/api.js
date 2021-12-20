import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 1000,
  // 해커 뉴스 API는 커스텀 헤더 넣으면 CORS걸려서 주석처리했습니다.
  // headers: {'X-Custom-Header': 'foobar'}
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    config.headers["Content-Type"] = "application/json; charset=utf-8";
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  function (error) {
    // 요청 에러 처리를 작성합니다.
    console.log(error);
    return Promise.reject(error);
  },
  function (response) {
    /*
      http status가 200인 경우
      응답 바로 직전에 대해 작성합니다. 
      .then() 으로 이어집니다.
  */
    return response.data;
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
