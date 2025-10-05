import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入Element Plus及样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入Element Plus图标库
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
// 全局注册Element Plus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// 挂载路由、状态管理、Element Plus
app.use(store).use(router).use(ElementPlus).mount('#app')
