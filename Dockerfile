FROM node:alpine AS my-orderng-build
WORKDIR /ordersng
                     

COPY package.json ./
COPY angular.json ./
COPY . .
RUN npm install


RUN npm install serve --save




ENV  NODE_ENV development

CMD ["npm", "start"]











