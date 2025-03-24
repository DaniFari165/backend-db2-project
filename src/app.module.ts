import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TweetsModule } from './tweets/tweets.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://UsuarioPrueba:UsuarioPruebaPassword@twitterdatacluster.pr01q.mongodb.net/?retryWrites=true&w=majority&appName=TwitterDataCluster'),
    UsuariosModule,
    TweetsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
