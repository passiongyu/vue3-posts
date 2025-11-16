# vue3-posts

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```


npm 다운로드. npm은 자바스크립트 라이브러리 패키지 매니저이다. 

~~~
npm init vue 
~~~
eslint와 prettier는 예스로 하고 설치
 ~~~
명령어 
cd vue3-posts
npm install :의존성 모듈 설치 
npm run format
npm run dev 
npm install bootstrap : 부트스트랩 설치 
npm install vue-router
npm run build: 빌드 파일 만들기

~~~

vscode extension
- indent-rainbow
- Auto Rename Tag
- css peek
- html to css autocompletion
- html css support
- live server
- vue(volar)
- vue vscode snippet

Axios
~~~
npm i axios //axios설치 
~~~


Json-server

프론트엔드 개발자를 위한 라이브러리 
쉽게 api서버 생성 
~~~
npm install -D json-server@0.17.4	//json-server라이브러리 설치 
json-server --watch db.json
npx json-server --watch db.json
npx json-server --watch db.json --port 3000
-> package.json에 scripts에 db로 등록해두고 
"db": "json-server --watch db.json --port 5000
npm run db
//npx: npm에 포함된 실행도구로 전역설치 없이 npm패키지를 바로 실행할 수 있게 해주는 명령어 

~~~


