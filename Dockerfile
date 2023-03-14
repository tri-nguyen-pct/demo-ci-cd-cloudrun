FROM node:alpine AS core
WORKDIR /apps

FROM core AS build
COPY ./package*.json ./
RUN npm install
COPY ./nest-cli.json ./nest-cli.json
COPY ./tsconfig*.json ./
COPY ./src ./src
RUN npm run build

FROM core AS production
COPY ./package*.json ./
RUN npm install --omit=dev
COPY --from=build /apps/dist /apps/dist

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]
