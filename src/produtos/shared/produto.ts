import { Document } from "mongoose";

export class Produto extends Document {
    nomeProduto:string;
    descricaoProduto:string;
    precoUnitario:number;
    estoqueProduto:number;
}
