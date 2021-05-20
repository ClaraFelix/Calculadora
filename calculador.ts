import { Figura } from "./figura"
import { Retângulo } from "./retangulo"
import { Quadrado } from "./quadrado"
import { FiguraComplexa } from "./figuraComplexa"

let quad1:Quadrado;
quad1 = new Quadrado(3);

let quad2:Quadrado;
quad2 = new Quadrado(10);

let retan1:Retângulo;
retan1 = new Retângulo(2,7);

let retan2:Retângulo;
retan2 = new Retângulo(5,3);

let figuras:Figura[];
figuras = [quad1, quad2, retan1, retan2];

let figuraComplexa:FiguraComplexa;
figuraComplexa = new FiguraComplexa(figuras);

console.log(FiguraComplexa); 
