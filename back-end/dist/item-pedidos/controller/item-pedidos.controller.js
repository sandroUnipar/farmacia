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
exports.ItemPedidosController = void 0;
const common_1 = require("@nestjs/common");
const item_pedidos_1 = require("../item-pedidos");
const item_pedido_services_1 = require("../provider/item-pedido.services");
const produto_services_1 = require("../../produtos/provider/produto.services");
let ItemPedidosController = (() => {
    let ItemPedidosController = class ItemPedidosController {
        constructor(itemPedidoServices) {
            this.itemPedidoServices = itemPedidoServices;
        }
        async jsonToEntity(json) {
            const entity = json.map(element => {
                const itemPedido = new item_pedidos_1.ItemPedidos();
                itemPedido.order = element.order;
                itemPedido.product = element.product;
                itemPedido.id = element.id;
                itemPedido.quantity = element.quantity;
                itemPedido.totalValue = element.totalValue;
                itemPedido.unitValue = element.unitValue;
                return itemPedido;
            });
            return entity;
        }
        async getAll() {
            let itemPedido = await this.itemPedidoServices.getAll();
            itemPedido = this.jsonToEntity(itemPedido);
            return itemPedido;
        }
        async getByOrder(order) {
            let itemPedido = await this.itemPedidoServices.getByOrder(order);
            return itemPedido;
        }
        async create(item) {
            const itemPedido = await this.itemPedidoServices.create(item);
            return itemPedido;
        }
        async update(id, item) {
            const itemPedido = await this.itemPedidoServices.update(id, item);
            return itemPedido;
        }
        async delete(id) {
            await this.itemPedidoServices.delete(id);
        }
    };
    __decorate([
        common_1.Get(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], ItemPedidosController.prototype, "getAll", null);
    __decorate([
        common_1.Get(':id'),
        __param(0, common_1.Param('order')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], ItemPedidosController.prototype, "getByOrder", null);
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], ItemPedidosController.prototype, "create", null);
    __decorate([
        common_1.Put(':id'),
        __param(0, common_1.Param('id')), __param(1, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Object]),
        __metadata("design:returntype", Promise)
    ], ItemPedidosController.prototype, "update", null);
    __decorate([
        common_1.Delete(':id'),
        __param(0, common_1.Param('id')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Promise)
    ], ItemPedidosController.prototype, "delete", null);
    ItemPedidosController = __decorate([
        common_1.Controller('item-pedidos'),
        __metadata("design:paramtypes", [item_pedido_services_1.ItemPedidoServices])
    ], ItemPedidosController);
    return ItemPedidosController;
})();
exports.ItemPedidosController = ItemPedidosController;
//# sourceMappingURL=item-pedidos.controller.js.map