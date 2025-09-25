// .vitepress/config/ja.ts

import type { DefaultTheme } from 'vitepress';

export const zhNav: DefaultTheme.NavItem[]= [
    { text: '主页', link: '/' },
    {
        text: 'BVE Train Sim',
        items: [
            { text: '补丁', link: '/bve/patchs' },
            { text: '插件', link: '/bve/plugins' }
        ]
    },
    { text: 'Minecraft', link: '/mc' },
    { text: '友情链接',
        items:[
            {text: '樱花小窝', link: 'https://www.sakuraonline.cn' }
        ]
    }
];

export const zhSidebar_bve: DefaultTheme.SidebarItem[]= [
    {
        text: 'BVE Train Sim',
        items: [
            {
                text: '补丁',
                items: [
                    {
                        text: 'vertah 東武车辆<br>定速+TASC/ATO全功能',
                        link: '/bve/patchs/tobu-vehicle-ato-tasc'
                    }
                ],
                link: '/bve/patchs'
            },
            {
                text: '插件',
                items: [
                    {
                        text: 'MetroAts<br>地铁直通系统ATC/S插件',
                        link: '/bve/plugins/metroats'
                    }//, {
                    //     text: 'TGMT-CBTC-EX<br>基于AtsEX的移动闭塞插件',
                    //     link: '/bve/plugins/tgmt-cbtc-ex'
                    // }
                ],
                link: '/bve/plugins'
            }
        ]
    }
];

export const zhSidebar_mc: DefaultTheme.SidebarItem[]= [
    { text: 'Minecraft', link: '/mc' }
]
