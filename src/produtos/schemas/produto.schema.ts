import * as mongoose from 'mongoose';

export const ProdutoSchema = new mongoose.Schema({
    nomeProduto:String,
    descricaoProduto:String,
    precoUnitario:Number,
    estoqueProduto:Number
})