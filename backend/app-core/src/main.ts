import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


import * as session from 'express-session';
import * as passport from 'passport'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('secure/api');

  app.use(
    session({
      store: new RedisStore({ client: redisClient as any }),
      secret: process.env.TOKEN_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: parseInt(process.env.EXPIRE_IN) }

    })
  )

  await app.listen(process.env.PORT);
}
bootstrap();
