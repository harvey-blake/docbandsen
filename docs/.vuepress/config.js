import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { webpackBundler } from '@vuepress/bundler-webpack'





const bansen = [
  '/bansen/help',
  '/bansen/hello'
]


export default defineUserConfig({
  lang: 'en-US',

  title: '帮助中心',
  description: '波段智投帮助中心',
  // 设置主题配置
  theme: defaultTheme({
    colorMode: 'dark',
    colorModeSwitch: false,

    // 配置导航栏
    navbar: [
      {
        text: '新手入门',
        children: bansen,
      },

    ],
    sidebar: {
      '/bansen/': [
        {
          text: '新手入门',
          collapsible: false,  // 允许折叠
          collapsed: true,    // 默认折叠状态
          children: bansen,
        },
      ],
    },

    // sidebarDepth: 0,


    editLink: true,

    lastUpdatedText: '上次更新',

    repo: 'harvey-blake/docbandsen', // 替换为您的 GitHub 仓库
    editLinks: false, // 启用编辑链接
    docsDir: 'docs',
    editLinkText: '编辑此页',
    contributors: false,
  }),
  bundler: webpackBundler(),
})
