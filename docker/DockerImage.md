# Docker Image

### Docker없이 이미지 생성

- 기존 컨테이너를 기반으로 새 이미지를 생성할 수 있습니다.

```
# docker commit [OPTIONS] [CONTAINER] [REPOSITORY[:TAG]]
# ubuntu 컨테이너의 현재 상태를 my_ubuntu:v1 이미지로 생성
$ docker commit -a fastcampus -m "First Commit" ubuntu my_ubuntu:v1
```

### Dockerfile 이용하여 이미지 생성

- Dockerfile을 기반으로 새 이미지를 생성할 수 있습니다.

```
FROM nodeL12-alpine
RUN apk add --no-cache python3 g++ make
WORKDIR /app
COPY ..
RUN yarn install --production
CMD ["node , "src/index.js]


# docker build [OPTIONS] PATH
# ./ 디렉토리를 빌드 컨텍스트로 my_app:v1 이미지 빌드 (Dockerfile 이용)
$ docker build -t my_app:v1 ./

-t = TAG

# ./ 디렉토리를 빌드 컨텍스트로 my_app:v1 이미지 빌드 (example/MyDockerfile 이용)
$ docker build -t my_app:v1 -f example/MyDockerfile ./

-f = 경로
```

- 빌드 컨텍스트

> 도커 빌드 명령 수행 시 현재 디렉토리(Current Working Directory)를 빌드 컨텍스트(Build Context) 라고 합니다. DockerFile로부터 이미지 빌드에 필요한 정보를 도커 데몬에게 전달하기 위한 목적입니다.
