import Vue from 'vue';
import VueRouter from 'vue-router';
import Accueil from './views/Accueil.vue';
import Profil from './views/Profil.vue';
import Login from './login/Login.vue';
import Users from './views/Users.vue';
import { Role } from './_helpers/role.js';
import { authenticationService } from "./_services/authentication.service";


Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'accueil',
            component: Accueil,
        },
        {
        path: '/profil',
        name: 'profil',
        component: Profil,
        meta: { authorize: [Role.Admin] }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },

    {
        path: '/users',
        name: 'users',
        component: Users,
        meta: { authorize: [Role.Admin] }
    },

    ]
})


router.beforeEach((to, from, next) => {

    // redirect to login page if not logged in and trying to access a restricted page
    const { authorize } = to.meta;

    if (authorize && !_.isEmpty(authorize)) {

        const currentUser = authenticationService.currentUserValue;

        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            return next({ path: "/login", query: { returnUrl: to.path } });
        }

        // check if route is restricted by role
        if (authorize.length && !authorize.includes(currentUser.id_role.name)) {
            // role not authorised so redirect to home page
            return next({ path: "/" });
        }

    }

    return next();
});




export default router;