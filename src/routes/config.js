const menus = {
    menus: [
        // 菜单相关路由

        {
            key: '/admin/profit',
            title: '收益',
            icon: 'bar1',
            component: 'Profit',
            exact: true
        },
        {
            key: '/admin/cloud',
            title: '云算力',
            icon: 'bar2',
            component: 'Cloud',
            exact: true
        },
        {
            key: '/admin/agent',
            title: '代理',
            icon: 'bar3',
            component: 'Agent',
            exact: true
        },
        {
            key: '/admin/my',
            title: '我的',
            icon: 'bar4',
            component: 'My',
            exact: true
        },


    ],
    others: [{
        key: '/farm/:farmId',
        component: 'FarmChild'
    }, ], // 非菜单相关路由

};

export default menus;

export const mainRouter = [{
        key: '/login',
        title: '登录',
        component: 'Login'
    },
    {
        key: '/forgetPassword',
        title: '忘记密码',
        component: 'Forget'
    },
    {
        key: '/getVerification',
        title: '获取验证码',
        component: 'Verification'
    },
    {
        key: '/resetPassword',
        title: '重置密码',
        component: 'ResetPassword'
    }
]