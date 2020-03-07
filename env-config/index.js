let envConfig = require(`./server.${
  process.env.CANARY === 'true' ? 'canary' : process.env.SERVER_ENV || 'local'
}`);
module.exports = Object.assign({}, envConfig, {
  'process.env.SERVER_ENV': process.env.SERVER_ENV,
  'process.env.ASSET_PREFIX': process.env.ASSET_PREFIX,
  'process.env.ASSET_PREFIX_SCRIPT': process.env.ASSET_PREFIX_SCRIPT,
  'process.env.BACKEND_URL': process.env.BACKEND_URL,
  'process.env.BACKEND_URL_SERVER_SIDE': process.env.BACKEND_URL_SERVER_SIDE,
});
