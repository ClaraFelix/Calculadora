import { Figura } from "./figura"
import { Quadrado } from "./quadrado"

export class Retângulo extends Figura {

    private _base : number;
    private _altura : number; 

    public constructor(base: number, altura: number){
        super();
        this._base = base;
        this._altura = altura;
    }
    
    public calcularArea (): number {
        super.calcularArea();
        return this._altura * this._base;
    } 

}