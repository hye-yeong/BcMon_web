FROM ubuntu:18.04

RUN apt-get update
RUN apt-get upgrade -y

RUN apt-get install curl -y
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install -y nodejs
RUN apt-get install -y build-essential
#RUN apt-get install -y npm
RUN node -v
RUN npm -v
RUN npm install -g yarn
RUN yarn global add create-react-app

COPY . ./front/app

WORKDIR	./front/app
EXPOSE	3000

RUN npm rebuild node-sass
ENTRYPOINT ["yarn", "run" ,"start"]
