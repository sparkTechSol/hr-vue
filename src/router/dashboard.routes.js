import UserDashboardIndex from "@/components/UserDashboardIndex.vue";


export default {
    path: '/',
    component: UserDashboardIndex,
    children: [
        {
            path: '',
            name: 'dash.home',
            component: () => import(/* webpackChunkName: "user.home" */ '@/views/UserDashboardHome'),

        },
        {
            path: 'login',
            name: 'user.login',
            meta: {
                layout: 'default'
            },
            component: () => import(/* webpackChunkName: "user.home" */ '@/views/UserLogin'),

        },
        {
            path: 'employee',
            name: 'dash.employee',
            component: () => import(/* webpackChunkName: "user.account" */ '@/views/EmployeeAll'),

        },
        {
            path: 'employee/add',
            name: 'dash.employee.add',
            component: () => import(/* webpackChunkName: "employee.add" */ '@/views/EmployeeAdd'),

        }
        ,
        {
            path: 'employee/edit/:empid',
            name: 'dash.employee.edit',
            component: () => import(/* webpackChunkName: "employee.edit" */ '@/views/EmployeeAdd'),

        }
    ]
}