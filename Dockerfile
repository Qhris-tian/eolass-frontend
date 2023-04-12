FROM node:18.15.0-alpine

RUN mkdir -p /usr/src
WORKDIR /usr/src

COPY package*.json /usr/src/
COPY *.ts /usr/src/

RUN npm install

COPY . /usr/src/

RUN npm run build

EXPOSE 5173

CMD [ "npm", "run", "dev", "--", "--host", "0.0.0.0" ]
