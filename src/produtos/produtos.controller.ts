import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProdutoService } from './shared/produto.service';
import { Produto } from './shared/produto';

@Controller('produtos')
export class ProdutosController {

    constructor(
        private ProdutoService:ProdutoService
        ){}

        @Get()
        async getAll():Promise<Produto[]>{
            return this.ProdutoService.getAll();
        }

        @Get(':id')
        async getById(@Param('id') id:string):Promise<Produto>{
            return this.ProdutoService.getById(id);
        }

        @Post()
        async create(@Body() produto:Produto):Promise<Produto>{
            return this.ProdutoService.create(produto);
        }
 
        @Put(':id')
        async update(@Param('id') id:string,@Body() produto:Produto):Promise<Produto>{
            return this.ProdutoService.update(id, produto);
        }

        @Delete(':id')
        async delete(@Param('id') id:string){
            this.ProdutoService.delete(id);
        }
    
}
