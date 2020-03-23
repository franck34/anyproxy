const AnyProxy = require('../proxy');

const options = {
  port: 8001,
  webInterface: {
    enable: false
  }
};
const proxyServer = new AnyProxy.ProxyServer(options);
proxyServer.start();
