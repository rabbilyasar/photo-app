FROM node:14.4.0-alpine3.10
USER root

WORKDIR /frontend
ENV PATH="./node_modules/.bin:$PATH"
COPY . .

RUN npm run build