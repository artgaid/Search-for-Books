FROM node:14-alpine
RUN mkdir -p /src/app
WORKDIR /src/app
COPY . /src/app
COPY package.json /src/app/package.json
COPY package-lock.json /src/app/package-lock.json
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]