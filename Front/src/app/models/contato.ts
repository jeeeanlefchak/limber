import { AbstractModel } from "./abstract";

export class Contato extends AbstractModel{
    
    public name : string;
    public email : string;
    public twitter : string;
    public phone : string;
    public favorite : boolean;

}