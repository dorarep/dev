const PROJECT_NAME = '/dev';

module.exports = {
  assetPrefix: process.env.NODE_ENV === "production" ? PROJECT_NAME : "",

  publicRuntimeConfig: {
    basePath: process.env.NODE_ENV === "production" ? PROJECT_NAME : "",
  },
};
