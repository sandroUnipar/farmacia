"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutosController = void 0;
const common_1 = require("@nestjs/common");
const produto_services_1 = require("../provider/produto.services");
const produtos_1 = require("../produtos");
let ProdutosController = (() => {
    let ProdutosController = class ProdutosController {
        constructor(produtoServices) {
            this.produtoServices = produtoServices;
        }
        async jsonToEntity(json) {
            const entity = json.map(element => {
                const produto = new produtos_1.Produtos();
                produto.name = element.name;
                produto.id = element.id;
                produto.desc = element.desc;
                produto.price = element.price;
                produto.und = element.und;
                produto.valid = element.valid;
                produto.stockQuantity = element.stockQuantity;
                return produto;
            });
            return entity;
        }
        async getAll() {
            let produto = await this.produtoServices.getAll();
            produto = this.jsonToEntity(produto);
            return produto;
        }
        async getById(id) {
            let produto = await this.produtoServices.getById(id);
            produto = this.jsonToEntity(produto);
            return produto;
        }
        async create(pede) {
            const produto = await this.produtoServices.create(pede);
            return produto;
        }
        async update(id, pede) {
            const produto = await this.produtoServices.update(id, pede);
            return produto;
        }
        async delete(id) {
            await this.produtoServices.delete(id);
        }
    };
    __decorate([
        common_1.Get(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], ProdutosController.prototype, "getAll", null);
    __decorate([
        common_1.Get(':id'),
        __param(0, common_1.Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], ProdutosController.prototype, "getById", null);
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], ProdutosController.prototype, "create", null);
    __decorate([
        common_1.Put(':id'),
        __param(0, common_1.Param('id')), __param(1, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Object]),
        __metadata("design:returntype", Promise)
    ], ProdutosController.prototype, "update", null);
    __decorate([
        common_1.Delete(':id'),
        __param(0, common_1.Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], ProdutosController.prototype, "delete", null);
    ProdutosController = __decorate([
        common_1.Controller('produtos'),
        __metadata("design:paramtypes", [produto_services_1.ProdutoServices])
    ], ProdutosController);
    return ProdutosController;
})();
exports.ProdutosController = ProdutosController;
//# sourceMappingURL=produtos.controller.js.map