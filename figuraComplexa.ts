import { Figura } from "./figura"

export class FiguraComplexa extends Figura {

    private _figuras: Figura[];

public constructor (figuras: Figura[]){
    super();
        this._figuras = figuras;
    }

    public calcularArea(): number{
        let areaFigComplexa = 0.0;

        for (let i=0; i < this._figuras.length; i++){
            areaFigComplexa = areaFigComplexa + this._figuras[i].calcularArea();
        }
        return 0.0;
    }
}
