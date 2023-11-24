# docker run -v .:/app -p 4200:4200 -it noderunner bash
# docker build -t noderunner .
FROM node:lts-slim

RUN npm install -g npm@10.2.4 && npm install -g @angular/cli && apt-get -o Acquire::Check-Valid-Until=false -o Acquire::Check-Date=false update && apt install -y curl
WORKDIR /app

EXPOSE 4200