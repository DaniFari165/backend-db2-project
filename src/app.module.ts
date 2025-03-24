import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TweetsModule } from './tweets/tweets.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: process.env.MONGODB_URI,
        dbName: process.env.MONGODB_NAME,
      }),
    }),
    UsuariosModule,
    TweetsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
