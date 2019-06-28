const proxy = require("http-proxy-middleware");

module.exports = function (app) {
    console.log("Setup proxy is ever called");

    let options = {
        target: "http://localhost:5000",
        changeOrigin: true,
        pathRewrite: {
            '^/api/articles/new': '/api',
            '^/api/articles/interesting': '/api'
          }
    }
    const myProxy = proxy(options)
    app.use('/api', myProxy);
};
