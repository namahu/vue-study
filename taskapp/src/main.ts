import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// createApp にはルートコンポーネントが必要
// App はルートコンポーネント
// ※ ルートコンポーネント → 他のコンポーネントを子要素として保持できるもの
const app = createApp(App)

app.use(router)

// HTMLのid属性が「#app」の要素にappを紐付けている
app.mount('#app')
