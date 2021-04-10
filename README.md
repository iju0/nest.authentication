## 개요

인증은 대부분의 모든 어플리케이션에서 사용된다. 그 중에서도 `Passport` 는 자바스크립트 인증 라이브러리 중에서 가장 많이 쓰인다.

`Nest` 에선 `@nest/passport`  의 모듈을 사용하여 `Passport` 를 사용할 수 있다.

`JsonWebToken` 를 이용한 로그인 및 권한 접근 방식은 다음과 같다.

1. 아이디 및 비밀번호로 로그인
2. 토큰발행
3. 발행한 토큰을 이용하여 권한이 필요한 각각의 api 에 접근
4. 만료시 로그인으로 튕김

## 처리 흐름

> Controller → LocalAuthGuard → LocalStrategy → AuthService(login) → token → Controller(profile) → JwtAuthGuard → JwtStrategy → userData