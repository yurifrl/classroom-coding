FROM mhart/alpine-node
RUN npm install -g babel-cli
ENV WORKDIR /app
WORKDIR $WORKDIR
ADD package.json $WORKDIR
RUN npm install
ADD ./ /app
