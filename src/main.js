import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

//모든 자식 컴포넌트에 router, route같은 객체를 사용할 수 있음.
createApp(App).use(router).mount('#app')
