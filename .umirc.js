// ref: https://umijs.org/config/
const { join } = require('path');

const root = join(__dirname, 'src');
export default {
  treeShaking: true,
  ssr: true,
  targets: {
    ie: 9,
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
          path: '/report/conference',
          component: './report/conference',
        },
        {
          path: '/report/invitation',
          component: './report/invitation',
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
          path: '/sponsorship',
          component: './sponsorship/sponsorship',
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
          path: '/',
          component: '../pages/index',
        },
      ],
    },
  ],

  chainWebpack(config, { webpack }) {
    // 设置 alias
    config.resolve.alias.set('root', root);
    config.output.set('filename', '[name].[hash].js');
    config.output.set('chunkFilename', '[name].[chunkhash].js');
  },

  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: false,
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
