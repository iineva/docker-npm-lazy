FROM node:argon-slim

MAINTAINER Steven <ineva@qq.com>

ENV HOME /data
VOLUME $HOME
WORKDIR $HOME
EXPOSE 3000

RUN npm install -g npm_lazy

# `cacheDirectory`: Directory to store cached packages.
ENV CACHE_DIRECTORY /data

# Print to stdout with colors
ENV LOG_TO_CONSOLE true

# Write log to file
ENV LOG_TO_FILE false

# Log file path. (This should be a file path.)
ENV logFileName = $DIRECTORY/npm_lazy.log

# `cacheAge`: maximum age before an index is refreshed from 
# - negative value means no refresh (e.g. once cached, never update the package.json metadata)
# - zero means always refresh (e.g. always ask the registry for metadata)
# - positive value means refresh every n milliseconds
#   (e.g. 60 * 60 * 1000 = expire metadata every 60 minutes)
#
# Note: if you want to use `npm star` and other methods which update
# npm metadata, you will need to set cacheAge to 0. npm generally wants the latest
# package metadata version so caching package metadata will interfere with it.
ENV CACHE_AGE 60 * 60 * 1000

# max milliseconds to wait for each HTTP response
ENV HTTP_TIMEOUT 10000

# maximum number of retries per HTTP resource to get
ENV MAX_RETRIES 5

# whether or not HTTPS requests are checked against Node's list of CAs
# set false if you are using your own npm mirror with a self-signed SSL cert
ENV REJECT_UNAUTHORIZED true;


# external url to npm_lazy, no trailing /
ENV EXTERNAL_URL http://localhost:3000

# registry url with trailing /
ENV REMOTE_URL https://registry.npmjs.com/

# bind port and host
ENV PORT 3000
ENV HOST 0.0.0.0

COPY config.js $HOME/config.js

RUN rm -rf /tmp/*

CMD npm_lazy -c $HOME/config.js

