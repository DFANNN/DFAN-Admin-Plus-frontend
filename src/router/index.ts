import { createRouter, createWebHistory } from 'vue-router'

/**
 * 1. createWebHashHistory()
 * URL 格式: 使用哈希 (#) 来保持 UI 路由状态。
 * 例如：http://example.com/#/home
 * 原理: 基于 window.location.hash 实现，哈希的改变不会导致页面的完整刷新。
 * 优点: 不需要后端支持，因为哈希部分不发送到服务器。适合不想修改后端配置的场景或静态托管的站点。
 * 缺点: URL 中会出现 # 符号，可能不如 createWebHistory() 美观。
 * 2. createWebHistory()
 * URL 格式: 基于 HTML5 的 history.pushState 和 history.replaceState API。
 * 例如：http://example.com/home
 * 原理: 无需 #，直接操作浏览器的历史记录栈来改变 URL，而不会触发页面重新加载。
 * 优点: URL 更加简洁、优雅，类似于普通网站的导航。
 * 缺点: 需要后端支持，后端服务器必须配置适当的路由规则（例如，将所有请求都指向 index.html），否则刷新页面会导致 404 错误。
 * 选择建议：
 * 如果项目是静态托管的应用，或者不想配置后端服务器，createWebHashHistory() 会更方便。
 * 如果有后端支持，并且希望 URL 看起来更自然美观，createWebHistory() 是更好的选择。
 */
const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: () => import('@/views/login/index.vue') },
    { path: '/home', component: () => import('@/views/home/index.vue') }
  ]
})

export default router
