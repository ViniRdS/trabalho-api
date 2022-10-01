import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ProdutoService } from './shared/produto.service';
import { ProdutosController } from './produtos.controller';
import { ProdutoSchema } from './schemas/produto.schema';
import { Produto } from './shared/produto';

@Module({
    imports:[
        MongooseModule.forFeature([{name: 'Produto',schema:ProdutoSchema}])
    ],
    controllers:[ProdutosController],
    providers:[ProdutoService]
})
export class ProdutosModule {}
