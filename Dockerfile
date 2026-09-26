FROM node:24-alpine

WORKDIR /app

COPY package* .

RUN npm install

COPY  . .

ENV DATABASE_URL= postgresql://neondb_owner:npg_U5XvxhRnef6D@ep-muddy-glitter-b49h6psy-pooler.c-6.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require

RUN npx prisma migrate dev
RUN npx prisma generate
RUN npm run build

CMD ["npm" , "start"]