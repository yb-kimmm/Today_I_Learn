---
title: "[리눅스] 맥에서 CentOS 8 초기셋팅하기"
permalink: /study/linux/2021-04-26-linuxSetting/
comments: true
---

## 1. VMware Fusion 설치

- https://www.vmware.com/kr/products/fusion/fusion-evaluation.html 링크를 들어간다.

![](/assets/images/linuxInstall/vmware.png)

- 위 화면에서 개인용 라이센스 등록을 클릭한다.
- 간단한 회원가입을 진행 한 후 라이센스를 발급받는다.
- 발급받은 라이센스를 바탕으로 설치를 진행한다.

## 2. CentOS ISO 설치

- https://www.centos.org/centos-linux/ 해당 링크를 들어간다.

  ![](/assets/images/linuxInstall/centos_1.png)

- x86_64를 클릭한다.

  ![](/assets/images/linuxInstall/centos_2.png)

- 위 링크 아무거나 클릭한다.

  ![](/assets/images/linuxInstall/centos_3.png)

- CentOS-8.3.2011-x86_64-boot.iso 를 설치한다.

## 3. CentOS 설치

- VMWare를 실행한다.

  ![](/assets/images/linuxInstall/centInstall1.png)
  ![](/assets/images/linuxInstall/centInstall2.png)

- 아까 설치한 ISO 파일을 드래그한다.

  ![](/assets/images/linuxInstall/centInstall3.png)

- 설치한 버전을 클릭한다. CentOS 8 64-bit

  ![](/assets/images/linuxInstall/centInstall4.png)
  ![](/assets/images/linuxInstall/centInstall6.png)

- 실행을 한다.

  ![](/assets/images/linuxInstall/os1.png)

- 초기화면이 다음과 같이 뜨게 된다.

  ![](/assets/images/linuxInstall/os2.png)

- Keyboard를 클릭하여 영어(미국)을 추가한다.

  ![](/assets/images/linuxInstall/os3.png)

- 언어는 한국어로 선택한다.

  ![](/assets/images/linuxInstall/os4.png)

- 시간대는 서울로 선택한다.

  ![](/assets/images/linuxInstall/os5.png)

- 설치 대상은 클릭하여 하드를 선택 한 후 완료 버튼을 누른다.
- 설치 소스는 http://mirror.centos.org/centos/8/BaseOS/x86_64/os/ 링크를 입력한 후 확인을 누른다.
