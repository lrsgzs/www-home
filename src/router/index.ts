/**
 * router/index.ts
 *
 * Manual routes for ./src/pages/*.vue
 */

// Composables
import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '@/pages/index.vue'

// Use hash-based navigation so the built site works as a plain static
// bundle (index.html + assets) without server-side URL rewrites.
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Index,
    },
  ],
})

export default router
