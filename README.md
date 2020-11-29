## Prerequisites
- Frontend로 React를 사용함
- 소스 코드를 포함한 개발 환경이 Docker에 저장되어 있음
- 그래프는 FusionChart를 사용함
- Backend와는 Rest API로 연결됨
- 외부 네트워크에서 bcmon.kmu.ac.kr로 연결하며 Web Proxy를 사용하여 내부 네트워크로 전달
- 내부 네트워크에서 Docker는 포트번호 3000으로, Host 포트매팅으로는 4200으로 연결할 수 있음 

## Docker에서 실행시키는 방법
 
   - 도커를 도커 레지스트리에서 바로 실행 시키는 방법  
     `$ docker run -itd --restart always --name frontend -v $HOME/front:/dev/front -p 4200:3000 wolf.kmu.ac.kr:443/bcmon_frontend:latest`  
     볼륨은 개발용임,도커 내부에 있는 frontend 소스 코드를 docker container 내부의 /dev/font에 복사하고 그 디렉토리를 호스트의 $HOME/front에서 직접 편잡하며 개발함  
     포트 매핑 4200-->3000은 웹으로 frontend 접속하기 위한 용도임  
   - Dockerfile로 부터 도커 이미지를 생성하여 실행시키는 방

## 파일 설명
```
frontend
  ├── node_modues(Directory) - nodeJS 모듈들: REACT, FusionChart 포함
  ├── public(directory)  
  ├── src(directory) - 웹 페이지 소스 코드 파일
  ├── .gitlab_ci.yml
  ├── Dockerfile -  frontend 도커 이미지를 생성하는 기위한 Docker 파일
  ├── npm-debug.log
  ├── yarn-error.log
  ├── yarn.lock
  ├── package.json
  ├── README.md  - 프로젝트에 대하여 설명하는 파일

```

## Frontend designer email
 If you have any questions or advice about frontend design, please contact oe_daphnea@naver.com

## Licensing
- Copyright 2018 Creative Tim (https://www.creative-tim.com)
- Creative Tim [License](https://www.creative-tim.com/license)
