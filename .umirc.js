// ref: https://umijs.org/config/
const { join } = require('path');

const isDev = process.env.NODE_ENV === 'development';
const root = join(__dirname, 'src');

export default {
  treeShaking: true,
  ssr: true,
  hash: true,
  publicPath: isDev ? '/dist/' : 'http://nsus-assets.oss-cn-beijing.aliyuncs.com/',
  targets: {
    ie: 9,
  },
  autoprefixer: {
    flexbox: true,
  },
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        {
          path: '/organization',
          component: './organization/organization',
        },
        {
          path: '/meeting',
          component: './meeting/meeting',
        },
        {
          path: '/report/post',
          component: './report/post',
        },
        {
          path: '/report',
          component: './report/report',
        },
        {
          path: '/theme',
          component: './theme/theme',
        },
        {
          path: '/previous',
          component: './previous/previous',
        },
        {
          path: '/contact',
          component: './contact/contact',
        },
        {
          path: '/photo',
          component: './photo/photo',
        },
        {
          path: '/info/hotel',
          component: './info/hotel',
        },
        {
          path: '/info/traffic',
          component: './info/traffic',
        },
        {
          path: '/payinfo',
          component: './payinfo/payinfo',
        },
        {
          path: '/message',
          component: './message/message',
        },
        {
          path: '/conference',
          component: './conference/conference',
        },
        {
          path: '/invitation',
          component: './invitation/invitation',
        },
        {
          path: '/',
          component: '../pages/index',
        },
      ],
    },
  ],

  chainWebpack(config, { webpack }) {
    // 设置 alias
    config.resolve.alias.set('root', root);
  },

  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        library: 'react',
        dynamicImport: {
          webpackChunkName: true,
        },
        title: '第五届全国超快光谱研讨会',
        dll: false,
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
};
