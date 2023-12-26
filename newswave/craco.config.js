const path = require("path");

module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          querystring: require.resolve("querystring-es3"),
        },
      },
    },
  },
};
