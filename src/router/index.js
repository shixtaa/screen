import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            redirect: { name: 'screenFirst' },
        },
        {
            path: '/one',
            name: 'screenFirst',
            component: () => import('../pages/screenFirst'),
            meta: { type: 0, prev: "screenEight", next: 'screenSecond', index: 1 }
        }, {
            path: '/two',
            name: 'screenSecond',
            component: () => import('../pages/screenSecond'),
            meta: { type: 0, prev: "screenFirst", next: 'screenThird', index: 2 }
        }, {
            path: '/three',
            name: 'screenThird',
            component: () => import('../pages/screenThird'),
            meta: { type: 0, prev: "screenSecond", next: "screenFourth", index: 3 }
        }, {
            path: '/four',
            name: 'screenFourth',
            component: () => import('../pages/screenFourth'),
            meta: { type: 1, prev: "screenThird", next: "screenFive", index: 4 }
        }, {
            path: '/five',
            name: 'screenFive',
            component: () => import('../pages/screenFive'),
            meta: { type: 2, prev: "screenFourth", next: "screenSix", index: 5 }
        },
        {
            path: '/six',
            name: 'screenSix',
            component: () => import('../pages/screenSix'),
            meta: { type: 3, prev: "screenFive", next: "screenSeven", index: 6 }
        },
        {
            path: '/seven',
            name: 'screenSeven',
            component: () => import('../pages/screenSeven'),
            meta: { type: 4, prev: "screenSix", next: "screenEight", index: 7 }
        },
        {
            path: '/eight',
            name: 'screenEight',
            component: () => import('../pages/screenEight'),
            meta: { type: 5,prev: "screenSeven", next: "screenNine", index: 8 }
        },
        {
            path: '/nine',
            name: 'screenNine',
            component: () => import('../pages/screenNine'),
            meta: { type: 6,prev: "screenEight", next: "screenFirst", index: 9 }
        }
    ]
})
