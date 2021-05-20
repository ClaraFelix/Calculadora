"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiguraComplexa = void 0;
var figura_1 = require("./figura");
var FiguraComplexa = /** @class */ (function (_super) {
    __extends(FiguraComplexa, _super);
    function FiguraComplexa(figuras) {
        var _this = _super.call(this) || this;
        _this._figuras = figuras;
        return _this;
    }
    FiguraComplexa.prototype.calcularArea = function () {
        var areaFigComplexa = 0.0;
        for (var i = 0; i < this._figuras.length; i++) {
            areaFigComplexa = areaFigComplexa + this._figuras[i].calcularArea();
        }
        return 0.0;
    };
    return FiguraComplexa;
}(figura_1.Figura));
exports.FiguraComplexa = FiguraComplexa;
