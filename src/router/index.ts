/**
 * router/index.ts
 *
 * Manual routes for ./src/pages/*.vue
 */

// Composables
import { createRouter, createWebHashHistory } from 'vue-router';
import Index from '@/pages/index.vue';
import Projects from '@/pages/projects.vue';

// Use hash-based navigation so the built site works as a plain static
// bundle (index.html + assets) without server-side URL rewrites.
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: Index,
            name: '主页',
            meta: {
                showNav: true,
            },
        },
        {
            path: '/projects',
            component: Projects,
            name: '项目',
            meta: {
                showNav: true,
            },
        },
    ],
});

export default router;
