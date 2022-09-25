import { Document } from "mongoose";

export class Task extends Document {
    nomeProduto:string;
    descricaoProduto:string;
    precoUnitario:number;
    estoqueProduto:number;
}
