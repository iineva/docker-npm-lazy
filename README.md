# docker-npm-lazy
[mixu/npm_lazy](https://github.com/mixu/npm_lazy) on Docker.


# ENV and default values

ENV | defaule | info
---- | ---- | ----
CACHE_DIRECTORY | /data | Cache directory
LOG_TO_CONSOLE | true | Print to stdout with colors
LOG_TO_FILE | false | Write log to file
logFileName | /data/npm_lazy.log | Log file path. (This should be a file path.)
CACHE_AGE | 3600000(60 * 60 * 1000) | `cacheAge`: maximum age before an index is refreshed from <br/>- negative value means no refresh (e.g. once cached, never update the package.json metadata) <br/> - zero means always refresh (e.g. always ask the registry for metadata)<br/>- positive value means refresh every n milliseconds<br/>   (e.g. 60 * 60 * 1000 = expire metadata every 60 minutes)<br/>Note: if you want to use `npm star` and other methods which update<br/>- npm metadata, you will need to set cacheAge to 0. npm generally wants the latest<br/>- package metadata version so caching package metadata will interfere with it.
HTTP_TIMEOUT | 10000 | max milliseconds to wait for each HTTP response
MAX_RETRIES | 5 | maximum number of retries per HTTP resource to get
REJECT_UNAUTHORIZED | true | whether or not HTTPS requests are checked against Node's list of CAs<br/> set false if you are using your own npm mirror with a self-signed SSL cert
EXTERNAL_URL | http://localhost:3000 | External url to npm_lazy, no trailing /
REMOTE_URL | https://registry.npmjs.com/ | Registry url with trailing /
PORT | 3000 | Bind port
HOST | 0.0.0.0 | Bind host

