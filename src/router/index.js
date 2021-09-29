import Vue from 'vue'
import VueRouter from 'vue-router'
import School from '../views/School.vue'
import Student from '../views/Student.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/student',
        name: 'Student',
        component: Student
    },
    {
        path: '/school',
        name: 'School',
        component: School
            // // route level code-splitting
            // // this generates a separate chunk (about.[hash].js) for this route
            // // which is lazy-loaded when the route is visited.
            // component: () =>
            //     import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router