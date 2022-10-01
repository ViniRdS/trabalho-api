import { Injectable } from '@nestjs/common';
import { Produto } from './produto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProdutoService {

    constructor(@InjectModel('Produto') private readonly produtoModel:Model<Produto>){}

    
    async getAll(){
        return await this.produtoModel.find().exec();
    }

    async getById(id:string){
        return await this.produtoModel.findById(id).exec();
    }

    async create(produto:Produto){
        const createdproduto = new this.produtoModel(produto);
        return await createdproduto.save();
    }

    async update(id:string,produto:Produto){
        await this.produtoModel.updateOne({_id:id},produto).exec();
        return this.getById(id);
    }

    async delete(id:string){
        return await this.produtoModel.deleteOne({_id:id}).exec()
    }
}
