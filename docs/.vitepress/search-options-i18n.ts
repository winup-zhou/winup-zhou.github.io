// .vitepress/search-options-i18n.ts

export const searchOptionsI18n = {
    // 中文搜索选项
    root: {
        placeholder: '搜索文档',
        translations: {
            button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
            },
            modal: {
                searchBox: {
                    resetButtonTitle: '清除查询条件',
                    resetButtonAriaLabel: '清除查询条件',
                    cancelButtonText: '取消',
                    cancelButtonAriaLabel: '取消'
                },
                startScreen: {
                    recentSearchesTitle: '搜索历史',
                    noRecentSearchesText: '没有搜索历史',
                    saveRecentSearchButtonTitle: '保存至搜索历史',
                    removeRecentSearchButtonTitle: '从搜索历史中移除',
                    favoriteSearchesTitle: '收藏',
                    removeFavoriteSearchButtonTitle: '从收藏中移除'
                },
                errorScreen: {
                    titleText: '无法获取结果',
                    helpText: '你可能需要检查你的网络连接'
                },
                footer: {
                    selectText: '选择',
                    navigateText: '切换',
                    closeText: '关闭',
                    searchByText: '搜索提供者'
                },
                noResultsScreen: {
                    noResultsText: '无法找到相关结果',
                    suggestedQueryText: '你可以尝试查询',
                    reportMissingResultsText: '你认为该查询应该有结果？',
                    reportMissingResultsLinkText: '点击反馈'
                }
            }
        }
    },
    // 日语搜索选项
    ja: {
        placeholder: 'ドキュメントを検索',
        translations: {
            button: {
                buttonText: '検索',
                buttonAriaLabel: 'ドキュメントを検索'
            },
            modal: {
                searchBox: {
                    resetButtonTitle: '検索条件をクリア',
                    resetButtonAriaLabel: '検索条件をクリア',
                    cancelButtonText: 'キャンセル',
                    cancelButtonAriaLabel: 'キャンセル'
                },
                startScreen: {
                    recentSearchesTitle: '検索履歴',
                    noRecentSearchesText: '検索履歴はありません',
                    saveRecentSearchButtonTitle: '検索履歴に保存',
                    removeRecentSearchButtonTitle: '検索履歴から削除',
                    favoriteSearchesTitle: 'お気に入り',
                    removeFavoriteSearchButtonTitle: 'お気に入りから削除'
                },
                errorScreen: {
                    titleText: '結果を取得できません',
                    helpText: 'ネットワーク接続を確認してください'
                },
                footer: {
                    selectText: '選択',
                    navigateText: '切り替え',
                    closeText: '閉じる',
                    searchByText: '検索提供元'
                },
                noResultsScreen: {
                    noResultsText: '関連する結果は見つかりませんでした',
                    suggestedQueryText: '別のクエリを試すことができます',
                    reportMissingResultsText: 'このクエリは結果があるべきだと思いますか？',
                    reportMissingResultsLinkText: 'フィードバックを送信'
                }
            }
        }
    }
};
