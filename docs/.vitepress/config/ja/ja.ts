// .vitepress/config/ja.ts

import type { DefaultTheme } from 'vitepress';

export const jaNav: DefaultTheme.NavItem[] = [
    { text: 'ホーム', link: '/ja/' },
    {
        text: 'BVE Train Sim',
        items: [
            { text: 'パッチ', link: '/ja/bve/patchs' },
            { text: 'プラグイン', link: '/ja/bve/plugins' }
        ]
    },
    { text: 'Minecraft', link: '/ja/mc' }
];
export const jaSidebar: DefaultTheme.SidebarItem[] = [
    {
        text: 'BVE Train Sim',
        items: [
            {
                text: 'パッチ',
                items: [
                    {
                        text: 'vertah 東武車両<br>定速＋TASC／ATO全機能',
                        link: '/ja/bve/patchs/tobu-vehicle-ato-tasc'
                    }
                ],
                link: '/ja/bve/patchs'
            },
            {
                text: '插件',
                items: [
                    {
                        text: 'MetroAts<br>地下鉄直通システムATC／Sプラグイン',
                        link: '/ja/bve/plugins/metroats'
                    }//,
                    // {
                    //     text: 'TGMT-CBTC-EX<br>AtsEXベースの移動閉塞プラグイン',
                    //     link: '/ja/bve/plugins/tgmt-cbtc-ex'
                    // }
                ],
                link: '/ja/bve/plugins'
            }
        ]
    },
    { text: 'Minecraft', link: '/ja/mc' }
]
