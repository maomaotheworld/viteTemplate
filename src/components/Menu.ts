export default [

    {
        path: 'Home',
        name: 'Home',
        meta: {
            icon: ' fa-house',
            label: '首頁',
        },

    },

    {
        path: 'System',
        name: 'System',
        meta: {
            icon: 'fa-paperclip',
            label: '系統設定',
        },

        children: [
            {
                path: 'child1',
                name: 'child1',
                meta: {
                    icon: 'fa-home',
                    label: '1號',
                },

            },
            {
                path: 'child2',
                name: 'child2',
                meta: {
                    icon: 'fa-home',
                    label: '2號',
                },
                NotInMenu: true
            },
        ]

    },
    {
        path: 'AboutView',
        name: 'AboutView',
        meta: {
            icon: ' fa-house',
            label: '檢視報表',
        },
        component: () => import(/* webpackChunkName: "AboutView" */ '../views/AboutView.vue'),


    },
    {
        path: 'System2',
        name: 'System2',
        meta: {
            icon: 'fa-paperclip',
            label: '系統設定2',
        },

        children: [
            {
                path: 'child21',
                name: 'child21',
                meta: {
                    icon: 'fa-home',
                    label: '1號Index',
                },
                component: () => import(/* webpackChunkName: "child21" */ '../views/System/index.vue'),

            },
            {
                path: 'child22',
                name: 'child22',
                meta: {
                    icon: 'fa-home',
                    label: '2號',
                },

            },
        ]

    },
    {
        path: 'UserInfoPage',
        name: 'UserInfoPage',
        meta: {
            icon: 'fa-home',
            label: '個人資料',
        },
        NotInMenu: true

    },
    {
        path: 'Test',
        name: 'Test',
        meta: {
            icon: 'fa-home',
            label: '報表管理',
        },


    },
    {
        path: '',
        meta: {
            label: '登出',
            icon: 'fa-sign-out',
            type: 'logout',
        },
    },


]