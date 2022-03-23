# Artifact 관리를 위한 Nexus 활용

## Nexus 설치 및 AWS S3 연결

> AWS EC2 인스턴스 생성 과정은 생략합니다.

### 1. AWS EC2 접속

![이미지](/assets/images/devOps/Nexus_1.png)

### 2. Nexus 컨테이너 실행

- Nexus 컨테이너 실행 명령어 :

---

```
docker run --name nexus -d -p 8081:8081 -v ~/nexus-data:/nexus-data -u root sonatype/nexus3
```

![이미지](/assets/images/devOps/Nexus_2.png)

- Nexus 접속

![이미지](/assets/images/devOps/Nexus_3.png)

- 관리자 접속

![이미지](/assets/images/devOps/Nexus_4.png)

- Admin Password 확인 명령어 :

```
docker exec -it nexus bash -c "cat /nexus-data/admin.password"
```

- 테스트 유저 계정 생성

![이미지](/assets/images/devOps/Nexus_5.png)

### 3. Blob Store 생성 및 Repository

- Blob Store 생성

![이미지](/assets/images/devOps/Nexus_6.png)
![이미지](/assets/images/devOps/Nexus_7.png)
![이미지](/assets/images/devOps/Nexus_8.png)
![이미지](/assets/images/devOps/Nexus_S3.png)

- Repository (Maven Proxy) 생성

![이미지](/assets/images/devOps/Nexus_9.png)
![이미지](/assets/images/devOps/Nexus_10.png)
![이미지](/assets/images/devOps/Nexus_11.png)

### 4. Docker Build

### Gradle 빌드시 Nexus Artifact 활용 및 Jar 정상 생성 확인

Gradle 빌드 명령어 :

```
gradle clean build --info
```

![이미지](/assets/images/devOps/Nexus_12.png)
![이미지](/assets/images/devOps/Nexus_13.png)

- 기존 build.gradle 설정(AS-IS)

```
repositories {
  mavenCentral()
}
```

- 변경된 build.gradle 설정(TO-BE)

```
repositories {
  maven {
    url "https://<Nexus VM 퍼블릭 주소>:8081/repository/<Nexus에 생성한 Proxy Repository명>"
    allowInsecureProtocel true // http 허용
  }
}
```

- ECR 리포지토리 생성

![이미지](/assets/images/devOps/Nexus_14.png)

- AWS ECR 로그인 명령어 :

![이미지](/assets/images/devOps/Nexus_15.png)

```
  aws ecr get-login-password --region <리전명> | docker login --username
  AWS --password-stdin <ECR 주소>
```

- Jib을 이용한 Docker 빌드 명령어 : - gradle jib --console=plain
  컨테이너 실행 명령어 :

### 6. Jib을 이용해 Docker 빌드 및 이미지 Push (AWS ECR)

### 7. 로컬에 Docker 이미지 배포 및 컨테이너 실행

![이미지](/assets/images/devOps/Nexus_16.png)

![이미지](/assets/images/devOps/Nexus_17.png)

```
docker run ‒d ‒p 8080:8080 ‒t <ECR 이미지 주소>
```
