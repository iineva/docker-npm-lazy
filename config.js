var cacheDirctory = process.env.CACHE_DIRECTORY || '/data';
var logToConsole = process.env.LOG_TO_CONSOLE || true;
var logToFile = process.env.LOG_TO_FILE || false;
var logFileName = cacheDirctory + '/npm_lazy.log';
var cacheAge = process.env.CACHE_AGE || 60 * 60 * 1000;
var httpTimeout = process.env.HTTP_TIMEOUT || 10000;
var maxRetries = process.env.MAX_RETRIES || 5;
var rejectUnauthorized = process.env.REJECT_UNAUTHORIZED || true;
var externalUrl = process.env.EXTERNAL_URL || 'http://localhost:3000';
var remoteUrl = process.env.REMOTE_URL || 'https://registry.npmjs.com/';
var port = process.env.PORT || 3000;
var host = process.env.HOST || '0.0.0.0';

module.exports = {
  // Logging config
  loggingOpts: {
    // Print to stdout with colors
    logToConsole: logToConsole,
    // Write to file
    logToFile: logToFile,

    // This should be a file path.
    filename: logFileName
  },

  // Cache config

  // `cacheDirectory`: Directory to store cached packages.
  //
  // Note: Since any relative path is resolved relative to the current working
  // directory when the server is started, you should use a full path.

  cacheDirectory: cacheDirctory,

  // `cacheAge`: maximum age before an index is refreshed from remoteUrl
  // - negative value means no refresh (e.g. once cached, never update the package.json metadata)
  // - zero means always refresh (e.g. always ask the registry for metadata)
  // - positive value means refresh every n milliseconds
  //   (e.g. 60 * 60 * 1000 = expire metadata every 60 minutes)
  //
  // Note: if you want to use `npm star` and other methods which update
  // npm metadata, you will need to set cacheAge to 0. npm generally wants the latest
  // package metadata version so caching package metadata will interfere with it.

  // Recommended setting: 0
  cacheAge: cacheAge,

  // Request config

  // max milliseconds to wait for each HTTP response
  httpTimeout: httpTimeout,
  // maximum number of retries per HTTP resource to get
  maxRetries: maxRetries,
  // whether or not HTTPS requests are checked against Node's list of CAs
  // set false if you are using your own npm mirror with a self-signed SSL cert
  rejectUnauthorized: rejectUnauthorized,

  // Remote and local URL

  // external url to npm_lazy, no trailing /
  externalUrl: externalUrl,
  // registry url with trailing /
  remoteUrl: remoteUrl,
  // bind port and host
  port: port,
  host: host,

  // Proxy config
  // You can also configure this using the http_proxy and https_proxy environment variables
  // cf. https://wiki.archlinux.org/index.php/proxy_settings
  proxy: {
    // http: 'http://1.2.3.4:80/',
    // https: 'http://4.3.2.1:80/'
  }
};
