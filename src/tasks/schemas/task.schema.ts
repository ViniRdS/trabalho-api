import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
    nomeProduto:String,
    descricaoProduto:String,
    precoUnitario:Number,
    estoqueProduto:Number
})