import { Figura } from "./figura"

export class Quadrado extends Figura{

    private _lado : number; 

    public constructor (lado: number) {
        super();
        this._lado = lado;
    } 
    public calcularArea (): number {
            return this._lado * this._lado;
        } 
        
}