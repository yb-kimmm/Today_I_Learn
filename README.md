# Node.js 공부 Expess

### `1. package-json`

프로젝트의 환경설정과 어떤 프레임워크들을 사용했는지 알 수 있다.

### `2. package-lock.js`

각 npm 마다 지원하는 모듈을 저장\
 ex) express - bodyparser 2.0
router - bodyparser 1.2\
 같이 어떤 모듈의 최적화되어있는지 기술해 놓는 파일이다.

### `3. nunjucks`

html template 로 기존의 html을 템플릿화 시켜 간단하게 작성할 수 있도록 도와준다.\

template 상속
{% block content -%} {% endblock %} 을 이용하여 상속하여 재사용 할 수 있다.

### `4. Middle Ware`

중간 요청을 제외하여 코드의 재사용성을 늘린다

### `5. 추가 20220224(목)`

1. 팔로잉 끊기 ( 시퀄라이즈의 destory 메서드와 라우터 활용) - O
2. 프로필 정보 변경 ( 시퀄라이즈의 update 메서드와 라우터 활용) - O

### `6. npm list`

1. morgan : log 출력
2. express-rate-limit API 사용 할 수 있는 횟수제한
