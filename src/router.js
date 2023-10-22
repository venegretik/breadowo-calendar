import { createRouter, createWebHistory } from 'vue-router';
import CalendarBreadowo from './components/CalendarBreadowo.vue';
const routes = [
    {
        path: '/',
        name: 'CalendarBreadowo',
        component: CalendarBreadowo
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;