import { createRouter, createWebHashHistory } from 'vue-router'
// 引入页面组件（后续会创建这些文件，先配置路由）
import Home from '../pages/Home.vue'
import CourseSchedule from '../pages/CourseSchedule.vue'
import HomeworkList from '../pages/HomeworkList.vue'

const routes = [
  {
    path: '/',          // 默认路由（首页）
    name: 'Home',
    component: Home
  },
  {
    path: '/course',    // 课程表页面路由
    name: 'CourseSchedule',
    component: CourseSchedule
  },
  {
    path: '/homework',  // 作业列表页面路由
    name: 'HomeworkList',
    component: HomeworkList
  }
]

const router = createRouter({
  history: createWebHashHistory(), // Hash模式，兼容GitHub Pages部署
  routes
})

export default router