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
exports.Retângulo = void 0;
var figura_1 = require("./figura");
var Retângulo = /** @class */ (function (_super) {
    __extends(Retângulo, _super);
    function Retângulo(base, altura) {
        var _this = _super.call(this) || this;
        _this._base = base;
        _this._altura = altura;
        return _this;
    }
    Retângulo.prototype.calcularArea = function () {
        _super.prototype.calcularArea.call(this);
        return this._altura * this._base;
    };
    return Retângulo;
}(figura_1.Figura));
exports.Retângulo = Retângulo;
