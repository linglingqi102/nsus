const isMock = process.env.MOCK === 'true';
module.exports = Object.assign(process.env, {
  ASSET_PATH: '',
  ASSET_PREFIX_SCRIPT: '',
  BACKEND_URL_SERVER_SIDE: isMock
    ? 'http://yapi.c7b5e42d1a16b4bdaaa6d09793ce1b716.cn-hangzhou.alicontainer.com/mock/156'
    : process.env.LOCAL || 'https://dev.unicareer.com/en/overseas-website-bff',
  BACKEND_URL: isMock
    ? 'http://yapi.c7b5e42d1a16b4bdaaa6d09793ce1b716.cn-hangzhou.alicontainer.com/mock/156'
    : process.env.LOCAL || 'https://dev.unicareer.com/en/overseas-website-bff',
});
