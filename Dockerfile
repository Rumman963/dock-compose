FROM node:24-alpine

WORKDIR /app

COPY package* .

RUN npm install

COPY  . .

RUN npx prisma generate
RUN npm run build

CMD ["npm" , "run" , "dev:docker"] 