import { createRouter, createWebHashHistory } from 'vue-router';
import Index from '@/pages/index.vue';
import ProjectsPage from '@/pages/projects.vue';
import Project from '@/pages/project.vue';
import NotFound from '@/pages/not-found.vue';

declare module 'vue-router' {
    interface RouteMeta {
        showNav?: boolean;
        icon?: string;
    }
}

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: Index,
            name: '主页',
            meta: {
                showNav: true,
                icon: 'mdi-home',
            },
        },
        {
            path: '/projects',
            component: ProjectsPage,
            name: '项目',
            meta: {
                showNav: true,
                icon: 'mdi-view-dashboard',
            },
        },
        {
            path: '/projects/:id',
            component: Project,
            name: '项目详情',
            meta: {
                showNav: false,
                icon: 'mdi-view-dashboard',
            },
        },
        {
            path: '/404',
            name: '404',
            component: NotFound,
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/404',
        },
    ],
});

export default router;
