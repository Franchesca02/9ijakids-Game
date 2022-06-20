const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  const cors = require("cors");
  const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  };
  app.use(cors(corsOptions));
  //   const cors = require("cors");
  //   app.use(
  //     "http://bit.ly/TeaserTask",
  //     createProxyMiddleware({
  //       target: "http://localhost:3000",
  //       changeOrigin: true,
  //     })
  //   );
};
