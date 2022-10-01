import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosModule } from './produtos/produtos.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
  MongooseModule.forRoot('mongodb+srv://vini:root@cluster0.paaq6nl.mongodb.net/?retryWrites=true&w=majority'),
  ProdutosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
