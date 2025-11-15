import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

//모든 자식 컴포넌트에 router, route같은 객체를 사용할 수 있음.
createApp(App).use(router).mount('#app')

console.log('MODE: ', import.meta.env.MODE)
console.log('BASE_URL: ', import.meta.env.BASE_URL)
console.log('PROD: ', import.meta.env.PROD)
console.log('DEV: ', import.meta.env.DEV)
console.log('VITE_APP_API_URL: ', import.meta.env.APP_API_URL)
