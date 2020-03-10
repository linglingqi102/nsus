
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
        { path: '/', component: '../pages/index' }
      ]
    }
  ],
  chainWebpack(config, { webpack }) {
    // 设置 alias
    config.resolve.alias.set('root', root);
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'nsus',
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
    }],
  ],
}
