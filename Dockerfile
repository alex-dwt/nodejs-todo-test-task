FROM node:12.6.0-stretch

RUN mkdir /app

COPY . /app
RUN cd /app/server && npm i
RUN cd /app/client && npm i && npm run build

WORKDIR /app/server
CMD bash -c 'sleep 10 && npm start'