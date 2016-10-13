FROM mhart/alpine-node
RUN npm install -g babel-cli
RUN npm install -g webpack
ENV WORKDIR /app
WORKDIR $WORKDIR
ADD package.json $WORKDIR
RUN npm install
ADD ./ /app
# Build the app
RUN npm build
